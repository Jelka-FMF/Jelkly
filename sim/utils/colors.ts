interface RgbColor {
    red: number,
    green: number,
    blue: number
}

interface HslColor {
    hue: number,
    saturation: number,
    lightness: number
}

interface HsvColor {
    hue: number,
    saturation: number,
    value: number
}

interface CmykColor {
    cyan: number,
    magenta: number,
    yellow: number,
    key: number
}

/**
 * Converts an HSL color to an RGB color.
 *
 * @param color The HSL color to convert
 * @param color.hue The hue of the color (0-360)
 * @param color.saturation The saturation of the color (0-100)
 * @param color.lightness The lightness of the color (0-100)
 *
 * @returns The RGB color
 */
function hslToRgb ({ hue, saturation, lightness }: HslColor): RgbColor {
    saturation = Math.max(0, Math.min(100, saturation)) / 100
    lightness = Math.max(0, Math.min(100, lightness)) / 100

    const a = saturation * Math.min(lightness, 1 - lightness)
    const k = (n: number) => (n + hue / 30) % 12
    const f = (n: number) => lightness - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))

    return {
        red: Math.round(255 * f(0)),
        green: Math.round(255 * f(8)),
        blue: Math.round(255 * f(4)),
    }
}

/**
 * Converts an RGB color to an HSL color.
 *
 * @param color The RGB color to convert
 * @param color.red The intensity of red (0-255)
 * @param color.green The intensity of green (0-255)
 * @param color.blue The intensity of blue (0-255)
 *
 * @returns The HSL color
 */
function rgbToHsl ({ red, green, blue }: RgbColor): HslColor {
    red = Math.max(0, Math.min(255, red))
    green = Math.max(0, Math.min(255, green))
    blue = Math.max(0, Math.min(255, blue))

    const a = Math.max(red, green, blue)
    const n = a - Math.min(red, green, blue)
    const f = 1 - Math.abs(2 * a - n - 1)
    const h = n && (a === red ? (green - blue) / n : a === green ? 2 + (blue - red) / n : 4 + (red - green) / n)

    return {
        hue: 60 * (h < 0 ? h + 6 : h),
        saturation: f ? n / f : 0,
        lightness: (2 * a - n) / 2,
    }
}

/**
 * Converts an HSV color to an RGB color.
 *
 * @param color The HSV color to convert
 * @param color.hue The hue of the color (0-360)
 * @param color.saturation The saturation of the color (0-100)
 * @param color.value The value of the color (0-100)
 *
 * @returns The RGB color
 */
function hsvToRgb ({ hue, saturation, value }: HsvColor): RgbColor {
    saturation = Math.max(0, Math.min(100, saturation)) / 100
    value = Math.max(0, Math.min(100, value)) / 100

    const a = saturation * value
    const k = (n: number) => (n + hue / 60) % 6
    const f = (n: number) => value - a * Math.max(0, Math.min(k(n), Math.min(4 - k(n), 1)))

    return {
        red: Math.round(255 * f(5)),
        green: Math.round(255 * f(3)),
        blue: Math.round(255 * f(1)),
    }
}

/**
 * Converts an RGB color to an HSV color.
 *
 * @param color The RGB color to convert
 * @param color.red The intensity of red (0-255)
 * @param color.green The intensity of green (0-255)
 * @param color.blue The intensity of blue (0-255)
 *
 * @returns The HSV color
 */
function rgbToHsv ({ red, green, blue }: RgbColor): HsvColor {
    red = Math.max(0, Math.min(255, red))
    green = Math.max(0, Math.min(255, green))
    blue = Math.max(0, Math.min(255, blue))

    const a = Math.max(red, green, blue)
    const n = a - Math.min(red, green, blue)
    const h = n && (a === red ? (green - blue) / n : a === green ? 2 + (blue - red) / n : 4 + (red - green) / n)

    return {
        hue: 60 * (h < 0 ? h + 6 : h),
        saturation: a ? n / a : 0,
        value: a,
    }
}

/**
 * Converts a CMYK color to an RGB color.
 *
 * @param color The CMYK color to convert
 * @param color.cyan The intensity of cyan (0-100)
 * @param color.magenta The intensity of magenta (0-100)
 * @param color.yellow The intensity of yellow (0-100)
 * @param color.key The intensity of key (0-100)
 *
 * @returns The RGB color
 */
function cmykToRgb ({ cyan, magenta, yellow, key }: CmykColor): RgbColor {
    cyan = Math.max(0, Math.min(100, cyan)) / 100
    magenta = Math.max(0, Math.min(100, magenta)) / 100
    yellow = Math.max(0, Math.min(100, yellow)) / 100
    key = Math.max(0, Math.min(100, key)) / 100

    const r = 255 * (1 - cyan) * (1 - key)
    const g = 255 * (1 - magenta) * (1 - key)
    const b = 255 * (1 - yellow) * (1 - key)

    return {
        red: Math.round(r),
        green: Math.round(g),
        blue: Math.round(b),
    }
}

/**
 * Converts an RGB color to a CMYK color.
 *
 * @param color The RGB color to convert.
 * @param color.red The intensity of red (0-255)
 * @param color.green The intensity of green (0-255)
 * @param color.blue The intensity of blue (0-255)
 *
 * @returns The CMYK color
 */
function rgbToCmyk ({ red, green, blue }: RgbColor): CmykColor {
    red = Math.max(0, Math.min(255, red)) / 255
    green = Math.max(0, Math.min(255, green)) / 255
    blue = Math.max(0, Math.min(255, blue)) / 255

    const k = 1 - Math.max(red, green, blue)
    const c = (1 - red - k) / (1 - k) || 0
    const m = (1 - green - k) / (1 - k) || 0
    const y = (1 - blue - k) / (1 - k) || 0

    return {
        cyan: Math.round(c * 100),
        magenta: Math.round(m * 100),
        yellow: Math.round(y * 100),
        key: Math.round(k * 100),
    }
}
