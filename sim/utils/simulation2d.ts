const lightsFront: number[] = []
const lightsBack: number[] = []

// Norm vector for splitting the lights
const norm = { x: 1, y: 0 }

// Split the lights into front and back
for (const [index, light] of Object.entries(positions)) {
    if ((norm.x * light.x + norm.y * light.z) > 0) lightsFront.push(parseInt(index))
    else lightsBack.push(parseInt(index))
}

const triangleOrigin = findOrigin(Object.values(positions), 10000, 100)
// console.debug("Triangle origin", triangleOrigin)

function renderView2D () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const maxTriangleWidth = 0.4 * canvas.width
    const maxTriangleHeight = canvas.height

    let triangleWidth = maxTriangleWidth
    let triangleHeight = (triangleOrigin.z - triangleOrigin.lz) / (triangleOrigin.y - triangleOrigin.ly) * triangleWidth

    if (triangleHeight > maxTriangleHeight) {
        triangleHeight = maxTriangleHeight
        triangleHeight = (triangleOrigin.ly - triangleOrigin.y) / (triangleOrigin.lz - triangleOrigin.z) * triangleHeight
    }

    // console.debug("Triangle width", triangleWidth)
    // console.debug("Triangle height", triangleHeight)

    drawTriangles2D(ctx, triangleWidth, triangleHeight, canvas.width)
    drawLights2D(ctx, triangleWidth, triangleHeight, canvas.width)
}

function drawTriangles2D (ctx: CanvasRenderingContext2D, triangleWidth: number, triangleHeight: number, canvasWidth: number) {
    // Draw the first triangle
    ctx.beginPath()
    ctx.moveTo(0, triangleHeight) // Bottom left
    ctx.lineTo(triangleWidth / 2, 0) // Top
    ctx.lineTo(triangleWidth, triangleHeight) // Bottom right
    ctx.closePath()
    ctx.fillStyle = "#008000"
    ctx.fill()

    // Draw the second triangle
    ctx.beginPath()
    ctx.moveTo(canvasWidth, triangleHeight) // Bottom right
    ctx.lineTo(canvasWidth - triangleWidth / 2, 0) // Top
    ctx.lineTo(canvasWidth - triangleWidth, triangleHeight) // Bottom left
    ctx.closePath()
    ctx.fillStyle = "#008000"
    ctx.fill()
}

function drawLights2D (ctx: CanvasRenderingContext2D, triangleWidth: number, triangleHeight: number, canvasWidth: number) {
    for (const [index, color] of Object.entries(pxsim.board().colorStates)) {
        const position = positions[parseInt(index)]

        if (color.green == 0 && color.red == 0 && color.blue == 0) {
            // Skip turned off lights
            continue
        }

        if (!position) {
            // Skip lights with no position
            continue
        }

        let y = triangleWidth * (position.y - triangleOrigin.ly) / (triangleOrigin.y - triangleOrigin.ly) - triangleWidth / 2
        let z = 2 * triangleHeight - (position.z - triangleOrigin.lz) / (triangleOrigin.z - triangleOrigin.lz) * triangleHeight

        if (lightsBack.includes(parseInt(index))) {
            y = canvasWidth - y
        }

        // console.debug("Light", index, y, z, color)

        ctx.beginPath()
        ctx.fillStyle = `rgb(${color.red}, ${color.green}, ${color.blue})`
        ctx.arc(y, z, 2, 0, 2 * Math.PI)
        ctx.fill()

    }
}
