namespace pxsim.example {
    /**
     * Show light in the specified color
     * @param {number[]} num array of numbers representing the lights
     * @param color RGB color object
     */
    //% blockId=example_block afterOnStart=true
    //% help=basic/forever weight=55
    //% block="show light %num| in %color"
    export function showLight(num: any, color: { red: number, green: number, blue: number }): void {

        const lights = Array.isArray(num) ? num : (num.data || []);
        board().testStateNum = lights;
        console.log("Test State Num: ", board().testStateNum);
        board().colorState = { red: color.red, green: color.green, blue: color.blue };

        
        console.log("Lights num: ", lights); // PRAVILNO :) 
        draw(lights, board().colorState);
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