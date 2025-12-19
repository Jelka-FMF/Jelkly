const lightsFront: number[] = []
const lightsBack: number[] = []

// Norm vector for splitting the lights
const norm = { x: 1, y: 0, z: 0 }

const paddingX = 100
const paddingZ = 200

// Split the lights into front and back
for (const [index, light] of Object.entries(normalizedPositions)) {
    if ((light.y) > 0) lightsFront.push(parseInt(index))
    else lightsBack.push(parseInt(index))
}

const triangleOrigin = findOrigin(Object.values(normalizedPositions), 100000, 0)

// console.debug("Triangle origin", triangleOrigin)

function renderView2D () {
    canvas.setAttribute("width", (canvas.getBoundingClientRect().width * 5).toString())
    canvas.setAttribute("height", (canvas.getBoundingClientRect().height * 5).toString())

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const maxTriangleWidth = 0.4 * (canvas.width - 2 * paddingX)
    const maxTriangleHeight = canvas.height - paddingZ

    let triangleWidth = maxTriangleWidth
    let triangleHeight = (triangleOrigin.z - triangleOrigin.lz) / (triangleOrigin.x - triangleOrigin.lx) * triangleWidth

    if (triangleHeight > maxTriangleHeight) {
        triangleHeight = maxTriangleHeight
        triangleHeight = (triangleOrigin.lx - triangleOrigin.x) / (triangleOrigin.lz - triangleOrigin.z) * triangleHeight
    }

    // console.debug("Triangle width", triangleWidth)
    // console.debug("Triangle height", triangleHeight)

    drawTriangles2D(ctx, triangleWidth, triangleHeight, canvas.width, canvas.height)
    drawLights2D(ctx, triangleWidth, triangleHeight, canvas.width, canvas.height)
}

function drawTriangles2D (ctx: CanvasRenderingContext2D, triangleWidth: number, triangleHeight: number, canvasWidth: number, canvasHeight: number) {
    // const triangleBottom = (paddingZ + canvasHeight + triangleHeight) / 2
    // const triangleTop = (paddingZ + canvasHeight - triangleHeight) / 2

    const triangleBottom = canvasHeight - paddingZ
    const triangleTop = (canvasHeight - paddingZ - triangleHeight) / 2 // Don't know why 2 is here. Figure it out latter

    // Draw the first triangle
    ctx.beginPath()
    ctx.moveTo(paddingX, triangleBottom) // Bottom left
    ctx.lineTo(triangleWidth / 2 + paddingX, triangleTop) // Top
    ctx.lineTo(triangleWidth + paddingX, triangleBottom) // Bottom right
    ctx.closePath()
    ctx.fillStyle = "#008000"
    ctx.fill()

    // Draw the second triangle
    ctx.beginPath()
    ctx.moveTo(canvasWidth - paddingX, triangleBottom) // Bottom right
    ctx.lineTo(canvasWidth - triangleWidth / 2 - paddingX, triangleTop) // Top
    ctx.lineTo(canvasWidth - triangleWidth - paddingX, triangleBottom) // Bottom left
    ctx.closePath()
    ctx.fillStyle = "#008000"
    ctx.fill()
}

function drawLights2D (ctx: CanvasRenderingContext2D, triangleWidth: number, triangleHeight: number, canvasWidth: number, canvasHeight: number) {
    const triangleBottom = canvasHeight - paddingZ

    for (const [index, color] of Object.entries(pxsim.board().colorStates)) {
        const position = normalizedPositions[parseInt(index)]

        if (!position) {
            // Skip lights with no position
            continue
        }

        let x = paddingX + (position.x - triangleOrigin.lx) / (triangleOrigin.x - triangleOrigin.lx) * triangleWidth / 2
        let z = triangleBottom + (position.z - triangleOrigin.z) / (triangleOrigin.lz - triangleOrigin.z) * triangleHeight / 2

        if (lightsBack.includes(parseInt(index))) {
            x = canvasWidth - x
        }

        // console.debug("Light", index, y, z, color)

        const maxAlpha = Math.max(color.red, color.green, color.blue) / 120
        const alphaChannel = Math.min(1, Math.max(0, maxAlpha))

        ctx.beginPath()
        ctx.fillStyle = `rgba(${color.red}, ${color.green}, ${color.blue}, ${alphaChannel})`
        ctx.arc(x, z, triangleWidth / 72, 0, 2 * Math.PI)
        ctx.fill()
    }
}
