window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    const canvas1 = document.getElementById('canvas1') as HTMLCanvasElement;
    const canvas2 = document.getElementById('canvas2') as HTMLCanvasElement;
    
    if (canvas1 && canvas1.parentElement) {
        canvas1.width = canvas1.parentElement.clientWidth;
        canvas1.height = canvas1.parentElement.clientHeight;
    }
    
    if (canvas2 && canvas2.parentElement) {
        canvas2.width = canvas2.parentElement.clientWidth;
        canvas2.height = canvas2.parentElement.clientHeight;
    }
}