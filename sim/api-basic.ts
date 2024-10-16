/**
 * Provides access to basic control functionality.
 */
//% color=#1E90FF weight=116 icon="\uf00a"
//% block="Basic"
//% block.loc.sl="Osnovno"
namespace pxsim.basic {
    /**
     * Repeat the code forever in the background
     * @param body code to execute
     */
    //% blockId=device_forever afterOnStart=true
    //% help=basic/forever weight=55
    //% block="forever"
    //% block.loc.sl="ponavljaj"
    export function forever (body: RefAction): void {
        thread.forever(body)
    }
}
