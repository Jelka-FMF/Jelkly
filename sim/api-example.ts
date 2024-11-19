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
        board().colorState = { red: color.red, green: color.green, blue: color.blue };
        
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
    export function __operationPicker(operation: string): string {
        return operation;
    }

    //% blockId=lightCoord_block
    //% block="coordinate %operation| of lights %nums"
    //% block.loc.sl="koordinata %operation| od lučk %nums"
    //% operation.shadow="operation_picker"
    export function getCoordinates(operation: string, nums: any): number[] {
        const lights = Array.isArray(nums) ? nums : (nums.data || []);
        const optionCoordinates: number[] = [];
        for (const num of lights) {
            optionCoordinates.push(getCoordinateForLight(num, positions, operation));
        }
        // console.log(optionCoordinates);

        return optionCoordinates;
    }
    
    //% blockId=lightList_block
    //% block="list of lights"
    //% block.loc.sl="seznam lučk"
    export function getLightsList(){
        return positions.map(pos => pos.id);
    }

    /**
     * Show light in the specified color
     * @param x x coordinate of the light
     * @param y y coordinate of the light
     * @param z z coordinate of the light
     * @param color RGB color object
     */
    //% blockId=sphere_block
    //% block="sphere with center x %num| y %num| z %num| and radius %nums| in color %color"
    //% block.loc.sl="krogla s centrom x %num| y %num| z %num| in radijem %nums| v barvi %color"
    export function sphere(x :number, y: number, z: number, r: number, color: { red: number, green: number, blue: number }): void {
        var sph = getSphere(x, y, z, r, positions);

        board().testStateNum = sph;
        board().colorState = { red: color.red, green: color.green, blue: color.blue };
        // console.log("fins izhodisce");
        console.log("izhodisce: ", findIzhodiscneKoordinate(positions, 10, 5));

        draw(sph, board().colorState);
    }

}

// TODO
// vrni seznam luč, ki so del krogle
// vrni seznam luč ki so na premici z debelino (valji)
// ravnina
// poljubna funkcija, ki poda mnogoterost če ti uspe
// kvadrati če hočeš