namespace pxsim.example {
    /**
     * Repeat the code forever in the background
     * @param body code to execute
     */
    //% blockId=example_block afterOnStart=true
    //% help=basic/forever weight=55
    //% block="show light %number| in %color"
    export function showLight (num: number, color: { red: number, green: number, blue: number }): void {
        board().testStateNum = num
        board().colorState = { red: color.red, green: color.green, blue: color.blue }

        // user inputs a list of IDs of lights, and a color
        // we pass both things to draw function
        var lights: number[] = [];
        lights.push(num); // currently just for 1 light. Later, this will be an array of IDs
        draw(lights, board().colorState)  

    }

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
    export function colorPicker(red: number, green: number, blue: number): {red: number, green: number, blue: number} {
        return { red: red, green: green, blue: blue };
    }

}
