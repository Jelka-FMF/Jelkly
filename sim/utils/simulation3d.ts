let isMouseDown = false;
let lastMouseX = 0;
let lastMouseY = 0;

let rotationScale = 0.01
let sizeScale = 0.7

let alpha = 0
let beta = 0

function renderView3D () {
    // console.log("TODO: Draw 3D canvas")

    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawLights3D(ctx, canvas.width, canvas.height, sizeScale)

    // Add event listeners for mouse events
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseUp); // Handle case when mouse leaves the canvas
}

function onMouseDown(event: MouseEvent) {
    isMouseDown = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;

    console.log(`Mouse move`);
}

function onMouseUp(event: MouseEvent) {
    isMouseDown = false;
}

function onMouseMove(event: MouseEvent) {
    if (!isMouseDown) return;

    const deltaX = event.clientX - lastMouseX;
    const deltaY = event.clientY - lastMouseY;

    lastMouseX = event.clientX;
    lastMouseY = event.clientY;

    // Update the view based on mouse movements
    // For example, rotate the view or move the camera
    console.log(`Mouse moved: deltaX=${deltaX}, deltaY=${deltaY}`);
    alpha = alpha + deltaX * rotationScale
    beta = beta - deltaY * rotationScale
}


// function drawing canvas rotatet for alpha, beta
function getRotatedCoordinates (x:number, y:number, z:number,alpha:number, beta:number) {
    // rotation matrix
    let newx = Math.cos(alpha) * Math.cos(beta) * x - Math.sin(alpha) * y - Math.cos(alpha) * Math.sin(beta) * z
    let newy = Math.sin(alpha) * Math.cos(beta) * x + Math.cos(alpha) * y - Math.cos(alpha) * Math.sin(beta) * z
    let newz =                   Math.sin(beta) * x                       +                   Math.cos(beta) * z

    return {x: newx, y: newy, z: newz}
}

function drawLights3D (ctx: CanvasRenderingContext2D, canvasWidth:number, canvasHeight:number,  scale:number) {
    const relativeHight = Math.max(...Object.values(positions).map(pos => pos.y)) - Math.min(...Object.values(positions).map(pos => pos.y))
    const lowestPoint = Math.max(...Object.values(positions).map(pos => pos.y))
    
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

        // const canvasCenterx = 
        // const canvasCentery = 

        let y = canvasWidth / 2 + scale * getRotatedCoordinates(position.x, position.y, position.z, alpha, beta).x
        let z = canvasHeight - scale *( getRotatedCoordinates(position.x, position.y, position.z, alpha, beta).z )
        // console.log("orginlno: ",position.z)
        // console.log("canvas z : ", z)

        ctx.beginPath()
        ctx.fillStyle = `rgb(${color.red}, ${color.green}, ${color.blue})`
        ctx.arc(y, z, 2, 0, 2 * Math.PI)
        ctx.fill()



    }
}