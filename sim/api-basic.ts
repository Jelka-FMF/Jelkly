/**
 * Provides access to basic control functionality.
 */
//% color=#1E90FF weight=120 icon="\uf00a"
//% block="Basic"
//% block.loc.sl="Osnovno"
namespace pxsim.basic {
    /**
     * Set the pattern frame rate
     * @param frameRate the frame rate in frames per second
     */
    //% blockId=pxt-set-frame-rate
    //% help=basic/set-frame-rate weight=50
    //% block="set frame rate to $frameRate"
    //% block.loc.sl="nastavi število sličic na sekundo na $frameRate"
    //% jsdoc.loc.sl="Nastavi število sličic na sekundo"
    //% frameRate.loc.sl="število sličic na sekundo"
    //% frameRate.min=1 frameRate.max=60 frameRate.defl=50
    export function setFrameRate (frameRate: number): void {
        frameRate = Math.max(0.01, Math.min(60, frameRate))
        board().frameRate = frameRate
    }

    /**
     * Repeat the code for each frame
     * @param handler the code to execute
     * @param handler.frameNumber the current frame number
     * @param handler.timeSinceStart the time since start in milliseconds
     */
    //% blockId=pxt-on-frame afterOnStart=true
    //% draggableParameters="reporter"
    //% help=basic/on-frame weight=55
    //% block="on frame $frameNumber $timeSinceStart"
    //% block.loc.sl="na sličici $frameNumber $timeSinceStart"
    //% jsdoc.loc.sl="Izvedi kodo ob vsaki sličici"
    //% handler.loc.sl="koda za izvedbo"
    //% frameNumber.loc.sl="trenutna številka sličice"
    //% timeSinceStart.loc.sl="čas od začetka v milisekundah"
    export function onFrame (handler: (frameNumber: number, timeSinceStart: number) => void): void {
        const simulationStart = performance.now()
        let frameNumber = 0

        async function loop () {
            const frameStart = performance.now()
            // @ts-ignore: Handler is actually RefAction
            await runtime.runFiberAsync(handler, frameNumber, frameStart - simulationStart)
            board().updateView()
            const frameEnd = performance.now()

            await U.delay(Math.max(0, 1000 / board().frameRate - (frameEnd - frameStart)))

            frameNumber++
            loop()
        }

        pxtrt.nullCheck(handler)
        loop()
    }
}
