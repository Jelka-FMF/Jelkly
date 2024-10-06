/**
 * Provides access to basic control functionality.
 */
//% color=#1E90FF weight=116 icon="\uf00a"
namespace pxsim.basic {
    /**
     * Repeat the code forever in the background
     * @param body code to execute
     */
    //% blockId=device_forever afterOnStart=true
    //% help=basic/forever weight=55
    //% block="forever"
    export function forever (body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% blockId=device_pause
    //% help=basic/pause weight=54
    //% block="pause (ms) %pause"
    //% pause.shadow=timePicker
    export function pause (ms: number): void {
        if (isNaN(ms)) ms = 20
        thread.pause(ms)
    }
}
