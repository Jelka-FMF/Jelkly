/**
 * Provides access to basic control functionality.
 */
//% color=#1E90FF weight=116 icon="\uf00a"
//% block="Basic"
//% block.loc.sl="Osnovno"
namespace pxsim.basic {
    /**
     * Repeat the code for each frame
     * @param handler code to execute
     */
    //% blockId=pxt-on-frame afterOnStart=true
    //% draggableParameters="reporter"
    //% help=basic/forever weight=55
    //% block="on frame $frameNumber"
    //% block.loc.sl="na sličici $frameNumber"
    export function onFrame (handler: (frameNumber: number) => void): void {
        let frameNumber = 0

        async function loop () {
            // @ts-ignore: Handler is actually RefAction
            await runtime.runFiberAsync(handler, [frameNumber])
            await U.delay(20)
            frameNumber++
            loop()
        }

        pxtrt.nullCheck(handler)
        loop()
    }
}
