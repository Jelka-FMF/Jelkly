// Auto-generated from simulator. Do not edit.
declare namespace basic {
    /**
     * Set the pattern frame rate
     * @param frameRate frame rate in frames per second
     */
    //% blockId=pxt-set-frame-rate afterOnStart=true
    //% block="set frame rate to $frameRate"
    //% block.loc.sl="nastavi število sličic na sekundo na $frameRate"
    //% frameRate.min=1 frameRate.max=60 frameRate.defl=50
    //% help=basic/set-frame-rate weight=50
    //% shim=basic::setFrameRate
    function setFrameRate(frameRate: number): void;

    /**
     * Repeat the code for each frame
     * @param handler code to execute
     */
    //% blockId=pxt-on-frame afterOnStart=true
    //% draggableParameters="reporter"
    //% help=basic/on-frame weight=55
    //% block="on frame $frameNumber"
    //% block.loc.sl="na sličici $frameNumber"
    //% shim=basic::onFrame
    function onFrame(handler: (frameNumber: number) => void): void;

}
declare namespace example {
    /**
     * Show light in the specified color
     * @param {number[]} num array of numbers representing the lights
     * @param color RGB color object
     */
    //% blockId=example_block afterOnStart=true
    //% help=basic/forever weight=55
    //% block="show light %num| in %color"
    //% shim=example::showLight
    function showLight(num: any, color: { red: number; green: number; blue: number; }): void;

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

    /**
     * Choose a coordinate
     * @param operation Choose 'x' or 'y' or 'z' coordinate of light
     * @param numbers Array of light IDs
     */
    //% blockId=operation_picker
    //% block="$operation"
    //% blockHidden=true
    //% operation.fieldEditor="textdropdown"
    //% operation.fieldOptions.decompileLiterals=true
    //% operation.fieldOptions.values='x,y,z'
    //% operation.defl='x'
    //% shim=example::__operationPicker
    function __operationPicker(operation: string): string;

    //% blockId=lightCoord_block
    //% block="coordinate %operation| of lights %nums"
    //% block.loc.sl="koordinata %operation| od lučk %nums"
    //% operation.shadow="operation_picker"
    //% shim=example::calculateMinMax
    function calculateMinMax(operation: string, nums: {}): {};

}

// Auto-generated. Do not edit. Really.
