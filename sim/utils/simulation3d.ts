let isMouseDown = false
let lastMouseX = 0
let lastMouseY = 0

let rotationScale = 0.01
let sizeScale = 12

let axisLength = 50

let initialDistance = 0
let initialScale = sizeScale

let alpha = 0
let beta = 0
let gama = 0

// Add event listeners for mouse events
canvas.addEventListener("mousedown", onMouseDown)
document.addEventListener("mousemove", onMouseMove)
document.addEventListener("mouseup", onMouseUp)
document.addEventListener("mouseleave", onMouseUp)
canvas.addEventListener("wheel", onWheel)
canvas.addEventListener("touchstart", onTouchStart)
canvas.addEventListener("touchmove", onTouchMove)
canvas.addEventListener("touchend", onTouchEnd)

function renderView3D () {
    canvas.setAttribute("width", (canvas.getBoundingClientRect().width * 5).toString())
    canvas.setAttribute("height", (canvas.getBoundingClientRect().height * 5).toString())

    // Get the origin of the drawing
    const origin = { x: canvas.width / 2, y: canvas.width / 2, z: 3 * canvas.height / 4 }

    // Move the origin up to adjust for controls
    ctx.translate(0, -300)

    // Draw the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawLights3D(ctx, origin, sizeScale)
    drawCoordinateSystem(ctx, origin, sizeScale, axisLength)
}

function onMouseDown (event: MouseEvent) {
    isMouseDown = true
    lastMouseX = event.clientX
    lastMouseY = event.clientY
}

function onMouseUp (event: MouseEvent) {
    isMouseDown = false
}

function onTouchStart (event: TouchEvent) {
    if (event.touches.length === 2) {
        // Handle pinch to zoom
        initialDistance = getDistance(event.touches[0], event.touches[1])
        initialScale = sizeScale
    } else {
        // Handle touch rotation
        isMouseDown = true
        lastMouseX = event.touches[0].clientX
        lastMouseY = event.touches[0].clientY
    }
}

function onTouchEnd (event: TouchEvent) {
    isMouseDown = false
}

function onWheel (event: WheelEvent) {
    // Update the view based on mouse scroll
    sizeScale *= 1 - event.deltaY * 0.001

    // Re-render the view
    pxsim.board().updateView()

    // Prevent zooming or scrolling
    event.preventDefault()
}

function onMouseMove (event: MouseEvent) {
    if (!isMouseDown) return

    const deltaX = event.clientX - lastMouseX
    const deltaY = event.clientY - lastMouseY

    // Update the last position
    lastMouseX = event.clientX
    lastMouseY = event.clientY

    // Update the view based on mouse movements
    // console.log(`Mouse moved: deltaX=${deltaX}, deltaY=${deltaY}`)
    alpha = alpha + deltaX * rotationScale
    gama = gama + deltaY * rotationScale

    // Re-render the view
    pxsim.board().updateView()

    // Prevent zooming or scrolling
    event.preventDefault()
}

function onTouchMove (event: TouchEvent) {
    if (event.touches.length === 2) {
        // Handle pinch to zoom
        const currentDistance = getDistance(event.touches[0], event.touches[1])
        sizeScale = initialScale * (currentDistance / initialDistance)

    } else if (isMouseDown) {
        // Handle touch rotation
        const deltaX = event.touches[0].clientX - lastMouseX
        const deltaY = event.touches[0].clientY - lastMouseY

        // Update the last position
        lastMouseX = event.touches[0].clientX
        lastMouseY = event.touches[0].clientY

        // Update the view based on touch movements
        alpha = alpha + deltaX * rotationScale
        gama = gama + deltaY * rotationScale
    }

    // Re-render the view
    pxsim.board().updateView()

    // Prevent zooming or scrolling
    event.preventDefault()
}

function getDistance (touch1: Touch, touch2: Touch): number {
    const dx = touch1.clientX - touch2.clientX
    const dy = touch1.clientY - touch2.clientY
    return Math.sqrt(dx * dx + dy * dy)
}

// function drawing canvas rotatet for alpha, beta, gama
function getRotatedCoordinates (x: number, y: number, z: number, alpha: number, beta: number, gama: number) {
    // Rotation matrix
    let newx = Math.sin(alpha) * Math.cos(beta) * x + (Math.cos(alpha) * Math.cos(gama) - Math.sin(alpha) * Math.sin(beta) * Math.sin(gama)) * y + (-Math.cos(alpha) * Math.sin(gama) - Math.sin(alpha) * Math.sin(beta) * Math.cos(gama)) * z
    let newy = Math.cos(alpha) * Math.cos(beta) * x + (-Math.sin(alpha) * Math.cos(gama) - Math.cos(alpha) * Math.sin(beta) * Math.sin(gama)) * y + (Math.sin(alpha) * Math.sin(gama) - Math.cos(alpha) * Math.sin(beta) * Math.cos(gama)) * z
    let newz = Math.sin(beta) * x + Math.cos(beta) * Math.sin(gama) * y + Math.cos(beta) * Math.cos(gama) * z

    return { x: newx, y: newy, z: newz }
}

function drawCoordinateSystem (ctx: CanvasRenderingContext2D, origin: Position, scale: number, length: number) {
    let xaxis = getRotatedCoordinates(length, 0, 0, alpha, -beta, -gama)
    let yaxis = getRotatedCoordinates(0, length, 0, alpha, -beta, -gama)
    let zaxis = getRotatedCoordinates(0, 0, length, alpha, -beta, -gama)

    // Draw x axis
    ctx.beginPath()
    ctx.moveTo(origin.y, origin.z)
    ctx.lineTo(xaxis.y * scale + origin.y, xaxis.z * scale + origin.z)
    ctx.strokeStyle = "red"
    ctx.stroke()

    // Draw y axis
    ctx.beginPath()
    ctx.moveTo(origin.y, origin.z)
    ctx.lineTo(yaxis.y * scale + origin.y, yaxis.z * scale + origin.z)
    ctx.strokeStyle = "green"
    ctx.stroke()

    // Draw z axis
    ctx.beginPath()
    ctx.moveTo(origin.y, origin.z)
    ctx.lineTo(-zaxis.y * scale + origin.y, -zaxis.z * scale + origin.z)
    ctx.strokeStyle = "blue"
    ctx.stroke()

    ctx.closePath()
}

function drawLights3D (ctx: CanvasRenderingContext2D, origin: Position, scale: number) {
    const lowestLight = Object.values(normalizedPositions).reduce((prev, current) => prev.z < current.z ? prev : current)

    for (const [index, color] of Object.entries(normalizedPositions)) {
        const position = normalizedPositions[parseInt(index)]

        if (!position) {
            // Skip lights with no position
            continue
        }

        const color = pxsim.board().colorStates[parseInt(index)] || { red: 0, green: 0, blue: 0 }

        let y = origin.y + sizeScale * getRotatedCoordinates(position.x, position.y, position.z, alpha, beta, gama).y
        let z = origin.z - sizeScale * (getRotatedCoordinates(position.x, position.y, position.z, alpha, beta, gama).z - lowestLight.z)

        const maxAlpha = Math.max(color.red, color.green, color.blue) / 120
        const alphaChannel = Math.min(1, Math.max(0, maxAlpha))

        ctx.beginPath()
        ctx.fillStyle = `rgba(${color.red}, ${color.green}, ${color.blue}, ${alphaChannel})`
        ctx.arc(y, z, 15, 0, 2 * Math.PI)
        ctx.fill()

        if (alphaChannel < 0.05) {
            ctx.strokeStyle = "#D3D3D3"
            ctx.stroke()
        }
    }
}
