namespace pxsim.example {
    /**
     * Repeat the code forever in the background
     * @param body code to execute
     */
    //% blockId=example_block afterOnStart=true
    //% help=basic/forever weight=55
    //% block="show light %number| in %color"
    export function showLight (number: number, color: string): void {
        board().testStateNum = number
        board().testStateStr = color
    }
}
