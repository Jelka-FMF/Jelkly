let isMouseDown = false
let lastMouseX = 0
let lastMouseY = 0

let rotationScale = 0.01
let sizeScale = 5

let alpha = 0
let beta = 0

// Add event listeners for mouse events
canvas.addEventListener("mousedown", onMouseDown)
canvas.addEventListener("mousemove", onMouseMove)
canvas.addEventListener("mouseup", onMouseUp)
canvas.addEventListener("mouseleave", onMouseUp)
canvas.addEventListener("wheel", onWheel)

function renderView3D () {
    canvas.setAttribute("width", (canvas.getBoundingClientRect().width * 5).toString())
    canvas.setAttribute("height", (canvas.getBoundingClientRect().height * 5).toString())

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawLights3D(ctx, canvas.width, canvas.height, sizeScale)
}

function onMouseDown (event: MouseEvent) {
    isMouseDown = true
    lastMouseX = event.clientX
    lastMouseY = event.clientY
}

function onMouseUp (event: MouseEvent) {
    isMouseDown = false
}

function onWheel (event: WheelEvent) {
    // Update the view based on mouse scroll
    sizeScale *= 1 - event.deltaY * 0.001

    // Re-render the view
    pxsim.board().updateView()
}

function onMouseMove (event: MouseEvent) {
    if (!isMouseDown) return

    const deltaX = event.clientX - lastMouseX
    const deltaY = event.clientY - lastMouseY

    lastMouseX = event.clientX
    lastMouseY = event.clientY

    // Update the view based on mouse movements
    // console.log(`Mouse moved: deltaX=${deltaX}, deltaY=${deltaY}`)
    alpha = alpha + deltaX * rotationScale
    beta = beta - deltaY * rotationScale

    // Re-render the view
    pxsim.board().updateView()
}

// function drawing canvas rotatet for alpha, beta
function getRotatedCoordinates (x: number, y: number, z: number, alpha: number, beta: number) {
    // Rotation matrix
    let newx = Math.cos(alpha) * Math.cos(beta) * x - Math.sin(alpha) * y - Math.cos(alpha) * Math.sin(beta) * z
    let newy = Math.sin(alpha) * Math.cos(beta) * x + Math.cos(alpha) * y - Math.cos(alpha) * Math.sin(beta) * z
    let newz = Math.sin(beta) * x + Math.cos(beta) * z

    return { x: newx, y: newy, z: newz }
}

function drawLights3D (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, scale: number) {
    // const relativeHeight = Math.max(...Object.values(positions).map(pos => pos.y)) - Math.min(...Object.values(positions).map(pos => pos.y))
    // const lowestPoint = Math.max(...Object.values(positions).map(pos => pos.y))

    for (const [index, color] of Object.entries(pxsim.board().colorStates)) {
        const position = positions[parseInt(index)]

        if (!position) {
            // Skip lights with no position
            continue
        }

        let y = canvasWidth / 2 + sizeScale * getRotatedCoordinates(position.x, position.y, position.z, alpha, beta).x
        let z = 3 * canvasHeight / 4 - sizeScale * (getRotatedCoordinates(position.x, position.y, position.z, alpha, beta).z)

        if (color.green == 0 && color.red == 0 && color.blue == 0) {
            // Skip turned off lights
            // To se nikoli ne zgodi
            console.log("LUČKA")
            ctx.beginPath()
            ctx.fillStyle = `rgb(${128}, ${250}, ${128})`
            ctx.arc(y, z, 1, 0, 2 * Math.PI)
            ctx.fill()
            continue
        }

        ctx.beginPath()
        ctx.fillStyle = `rgb(${color.red}, ${color.green}, ${color.blue})`
        ctx.arc(y, z, 15, 0, 2 * Math.PI)
        ctx.fill()
    }
}
