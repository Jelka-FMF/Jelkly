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
     * Show light in the specified color
     * @param num array of numbers representing the lights
     * @param color RGB color object
     */
    //% blockId=example_block afterOnStart=true
    //% help=basic/forever weight=55
    //% block="show light %num| in %color"
    //% shim=example::showLight
    function showLight(num: {}, color: { red: number; green: number; blue: number; }): void;

    /**
     * Create an RGB color
     * @param red The intensity of red (0-255)
     * @param green The intensity of green (0-255)
     * @param blue The intensity of blue (0-255)
     * @returns an RGB color object
     */
    //% blockId=color_picker_block
    //% block="RGB color red %red| green %green| blue %blue"
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    //% shim=example::colorPicker
    function colorPicker(red: number, green: number, blue: number): { red: number; green: number; blue: number; };

}

// Auto-generated. Do not edit. Really.
