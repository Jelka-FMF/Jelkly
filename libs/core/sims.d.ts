// Auto-generated from simulator. Do not edit.
declare namespace basic {
    /**
     * Repeat the code forever in the background
     * @param body code to execute
     */
    //% blockId=device_forever afterOnStart=true
    //% help=basic/forever weight=55
    //% block="forever"
    //% block.loc.sl="ponavljaj"
    //% shim=basic::forever
    function forever(body: () => void): void;

}
declare namespace example {
    /**
     * Repeat the code forever in the background
     * @param body code to execute
     */
    //% blockId=example_block afterOnStart=true
    //% help=basic/forever weight=55
    //% block="show light %number| in %color"
    //% shim=example::showLight
    function showLight(number: number, color: string): void;

}

// Auto-generated. Do not edit. Really.
