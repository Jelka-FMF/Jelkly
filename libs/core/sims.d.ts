// Auto-generated from simulator. Do not edit.
declare namespace basic {
    /**
     * Repeat the code forever in the background
     * @param body code to execute
     */
    //% blockId=device_forever afterOnStart=true
    //% help=basic/forever weight=55
    //% block="forever"
    //% shim=basic::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% blockId=device_pause
    //% help=basic/pause weight=54
    //% block="pause (ms) %pause"
    //% pause.shadow=timePicker
    //% shim=basic::pause
    function pause(ms: number): void;

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
