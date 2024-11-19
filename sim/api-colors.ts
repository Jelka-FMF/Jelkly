/**
 * Provides access to colors.
 */
//% color=#E30FC0 weight=118 icon="\uf1fc"
//% block="Colors"
//% block.loc.sl="Barve"
namespace pxsim.colors {
    /**
     * Generate a random color
     */
    //% blockId=colors-random
    //% help=colors/random-color weight=50
    //% block="random color"
    //% block.loc.sl="naključna barva"
    export function randomColor (): Color {
        // Generate random RGB values
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)

        // Remove the smallest component to make the color more vibrant
        const min = Math.min(red, green, blue)
        if (red === min) return { red: 0, green, blue }
        if (green === min) return { red, green: 0, blue }
        if (blue === min) return { red, green, blue: 0 }

        return { red, green, blue }
    }

    /**
     * Create an RGB color
     * @param red The intensity of red (0-255)
     * @param green The intensity of green (0-255)
     * @param blue The intensity of blue (0-255)
     */
    //% blockId=colors-rgb
    //% help=colors/rgb-color weight=49
    //% block="red $red green $green blue $blue"
    //% block.loc.sl="rdeča $red zelena $green modra $blue"
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    export function rgbColor(red: number, green: number, blue: number): Color {
        return { red: red, green: green, blue: blue };
    }
}
