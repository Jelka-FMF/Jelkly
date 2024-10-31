/**
 * Provides access to basic control functionality.
 */
//% color=#1E90FF weight=116 icon="\uf00a"
//% block="Basic"
//% block.loc.sl="Osnovno"
namespace pxsim.basic {
    /**
     * Set the pattern frame rate
     * @param frameRate frame rate in frames per second
     */
    //% blockId=pxt-set-frame-rate afterOnStart=true
    //% block="set frame rate to $frameRate"
    //% block.loc.sl="nastavi število sličic na sekundo na $frameRate"
    //% frameRate.min=1 frameRate.max=60 frameRate.defl=50
    //% help=basic/set-frame-rate weight=50
    export function setFrameRate (frameRate: number): void {
        frameRate = Math.max(0.01, Math.min(60, frameRate))
        board().frameRate = frameRate
    }

    /**
     * Repeat the code for each frame
     * @param handler code to execute
     */
    //% blockId=pxt-on-frame afterOnStart=true
    //% draggableParameters="reporter"
    //% help=basic/on-frame weight=55
    //% block="on frame $frameNumber"
    //% block.loc.sl="na sličici $frameNumber"
    export function onFrame (handler: (frameNumber: number) => void): void {
        let frameNumber = 0

        async function loop () {
            const startTime = performance.now()
            // @ts-ignore: Handler is actually RefAction
            await runtime.runFiberAsync(handler, frameNumber)
            const endTime = performance.now()

            await U.delay(Math.max(0, 1000 / board().frameRate - (endTime - startTime)))

            frameNumber++
            loop()
        }

        pxtrt.nullCheck(handler)
        loop()
    }
}
