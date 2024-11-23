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
    //% blockGap=40
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
    //% block="red $red | green $green | blue $blue"
    //% block.loc.sl="rdeča $red | zelena $green | modra $blue"
    //% inlineInputMode=external
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    export function rgbColor (red: number, green: number, blue: number): Color {
        return { red: red, green: green, blue: blue }
    }

    /**
     * Create an HSL color
     * @param hue The hue of the color (0-360)
     * @param saturation The saturation of the color (0-100)
     * @param lightness The lightness of the color (0-100)
     */
    //% blockId=colors-hsl
    //% help=colors/hsl-color weight=48
    //% block="hue $hue | saturation $saturation | lightness $lightness"
    //% block.loc.sl="odtenek $hue | nasičenost $saturation | svetlost $lightness"
    //% inlineInputMode=external
    //% hue.min=0 hue.max=360
    //% saturation.min=0 saturation.max=100 saturation.defl=100
    //% lightness.min=0 lightness.max=100 lightness.defl=50
    export function hslColor (hue: number, saturation: number, lightness: number): Color {
        return hslToRgb({ hue, saturation, lightness })
    }

    /**
     * Create an HSV color
     * @param hue The hue of the color (0-360)
     * @param saturation The saturation of the color (0-100)
     * @param value The value of the color (0-100)
     */
    //% blockId=colors-hsv
    //% help=colors/hsv-color weight=47
    //% block="hue $hue | saturation $saturation | value $value"
    //% block.loc.sl="odtenek $hue | nasičenost $saturation | vrednost $value"
    //% inlineInputMode=external
    //% hue.min=0 hue.max=360
    //% saturation.min=0 saturation.max=100 saturation.defl=100
    //% value.min=0 value.max=100 value.defl=100
    export function hsvColor (hue: number, saturation: number, value: number): Color {
        return hsvToRgb({ hue, saturation, value })
    }

    /**
     * Create a CMYK color
     * @param cyan The intensity of cyan (0-100)
     * @param magenta The intensity of magenta (0-100)
     * @param yellow The intensity of yellow (0-100)
     * @param key The intensity of black (0-100)
     */
    //% blockId=colors-cmyk
    //% help=colors/cmyk-color weight=46
    //% block="cyan $cyan | magenta $magenta | yellow $yellow | key $key"
    //% block.loc.sl="cian $cyan | magenta $magenta | rumena $yellow | črna $key"
    //% inlineInputMode=external
    //% cyan.min=0 cyan.max=100
    //% magenta.min=0 magenta.max=100
    //% yellow.min=0 yellow.max=100
    //% key.min=0 key.max=100
    //% blockGap=40
    export function cmykColor (cyan: number, magenta: number, yellow: number, key: number): Color {
        return cmykToRgb({ cyan, magenta, yellow, key })
    }

    /**
     * Get an RGB component of a color
     * @param component The RGB component to get
     * @param color The color to get the component from
     */
    //% blockId=colors-rgb-component
    //% help=colors/rgb-component weight=45
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    export function rgbComponent (component: RgbComponent, color: Color): number {
        switch (component) {
            case RgbComponent.Red: return color.red
            case RgbComponent.Green: return color.green
            case RgbComponent.Blue: return color.blue
        }
    }

    /**
     * Get an HSL component of a color
     * @param component The HSL component to get
     * @param color The color to get the component from
     */
    //% blockId=colors-hsl-component
    //% help=colors/hsl-component weight=44
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    export function hslComponent (component: HslComponent, color: Color): number {
        const { hue, saturation, lightness } = rgbToHsl(color)
        switch (component) {
            case HslComponent.Hue: return hue
            case HslComponent.Saturation: return saturation
            case HslComponent.Lightness: return lightness
        }
    }

    /**
     * Get an HSV component of a color
     * @param component The HSV component to get
     * @param color The color to get the component from
     */
    //% blockId=colors-hsv-component
    //% help=colors/hsv-component weight=43
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    export function hsvComponent (component: HsvComponent, color: Color): number {
        const { hue, saturation, value } = rgbToHsv(color)
        switch (component) {
            case HsvComponent.Hue: return hue
            case HsvComponent.Saturation: return saturation
            case HsvComponent.Value: return value
        }
    }

    /**
     * Get a CMYK component of a color
     * @param component The CMYK component to get
     * @param color The color to get the component from
     */
    //% blockId=colors-cmyk-component
    //% help=colors/cmyk-component weight=42
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    export function cmykComponent (component: CmykComponent, color: Color): number {
        const { cyan, magenta, yellow, key } = rgbToCmyk(color)
        switch (component) {
            case CmykComponent.Cyan: return cyan
            case CmykComponent.Magenta: return magenta
            case CmykComponent.Yellow: return yellow
            case CmykComponent.Key: return key
        }
    }
}
