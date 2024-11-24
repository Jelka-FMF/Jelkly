// Auto-generated from simulator. Do not edit.
declare namespace basic {
    /**
     * Set the pattern frame rate
     * @param frameRate the frame rate in frames per second
     */
    //% blockId=pxt-set-frame-rate
    //% help=basic/set-frame-rate weight=50
    //% block="set frame rate to $frameRate"
    //% block.loc.sl="nastavi število sličic na sekundo na $frameRate"
    //% frameRate.min=1 frameRate.max=60 frameRate.defl=50
    //% shim=basic::setFrameRate
    function setFrameRate(frameRate: number): void;

    /**
     * Repeat the code for each frame
     * @param handler the code to execute
     */
    //% blockId=pxt-on-frame afterOnStart=true
    //% draggableParameters="reporter"
    //% help=basic/on-frame weight=55
    //% block="on frame $frameNumber $timeSinceStart"
    //% block.loc.sl="na sličici $frameNumber $timeSinceStart"
    //% shim=basic::onFrame
    function onFrame(handler: (frameNumber: number, timeSinceStart: number) => void): void;

}
declare namespace colors {
    /**
     * Generate a random color
     */
    //% blockId=colors-random
    //% help=colors/random-color weight=50
    //% block="random color"
    //% block.loc.sl="naključna barva"
    //% blockGap=40
    //% shim=colors::randomColor
    function randomColor(): Color;

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
    //% shim=colors::rgbColor
    function rgbColor(red: number, green: number, blue: number): Color;

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
    //% shim=colors::hslColor
    function hslColor(hue: number, saturation: number, lightness: number): Color;

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
    //% shim=colors::hsvColor
    function hsvColor(hue: number, saturation: number, value: number): Color;

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
    //% shim=colors::cmykColor
    function cmykColor(cyan: number, magenta: number, yellow: number, key: number): Color;

    /**
     * Get an RGB component of a color
     * @param component The RGB component to get
     * @param color The color to get the component from
     */
    //% blockId=colors-rgb-component
    //% help=colors/rgb-component weight=45
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    //% shim=colors::rgbComponent
    function rgbComponent(component: RgbComponent, color: Color): number;

    /**
     * Get an HSL component of a color
     * @param component The HSL component to get
     * @param color The color to get the component from
     */
    //% blockId=colors-hsl-component
    //% help=colors/hsl-component weight=44
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    //% shim=colors::hslComponent
    function hslComponent(component: HslComponent, color: Color): number;

    /**
     * Get an HSV component of a color
     * @param component The HSV component to get
     * @param color The color to get the component from
     */
    //% blockId=colors-hsv-component
    //% help=colors/hsv-component weight=43
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    //% shim=colors::hsvComponent
    function hsvComponent(component: HsvComponent, color: Color): number;

    /**
     * Get a CMYK component of a color
     * @param component The CMYK component to get
     * @param color The color to get the component from
     */
    //% blockId=colors-cmyk-component
    //% help=colors/cmyk-component weight=42
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    //% shim=colors::cmykComponent
    function cmykComponent(component: CmykComponent, color: Color): number;

}
declare namespace lights {
    /**
     * Set lights to the specified color
     * @param lights a single light or an array of lights AAA
     * @param color the RGB color of the lights to set
     */
    //% blockId=lights-set
    //% help=lights/set-lights weight=55
    //% block="set lights $lights to color $color"
    //% block.loc.sl="nastavi lučke $lights na barvo $color"
    //% shim=lights::setLights
    function setLights(lights: number | number[], color: Color): void;

    /**
     * Turn off all lights
     */
    //% blockId=lights-reset
    //% help=lights/reset-lights weight=50
    //% block="reset lights"
    //% block.loc.sl="ponastavi lučke"
    //% blockGap=40
    //% shim=lights::resetLights
    function resetLights(): void;

    /**
     * Get the colors of the specified lights
     * @param lights the lights to get the colors of
     */
    //% blockId=lights-get-colors
    //% help=lights/get-colors weight=45
    //% block="colors of lights $lights"
    //% block.loc.sl="barve lučk $lights"
    //% shim=lights::getColors
    function getColors(lights: number | number[]): Color[];

    /**
     * Get the color of the specified light
     * @param light the light to get the color of
     */
    //% blockId=lights-get-color
    //% help=lights/get-color weight=40
    //% block="color of light $light"
    //% block.loc.sl="barva lučke $light"
    //% blockGap=40
    //% shim=lights::getColor
    function getColor(light: number): Color;

    /**
     * Get the coordinates of the specified lights
     * @param axis the coordinate axis to get the value of
     * @param lights the lights to get the coordinate of
     */
    //% blockId=lights-get-coordinates
    //% help=lights/get-coordinates weight=35
    //% block="coordinates $axis of lights $lights"
    //% block.loc.sl="koordinate $axis lučk $lights"
    //% shim=lights::getCoordinates
    function getCoordinates(axis: Axis, lights: number | number[]): number[];

    /**
     * Get the coordinate of the specified light
     * @param axis the coordinate axis to get the value of
     * @param light the light to get the coordinate of
     */
    //% blockId=lights-get-coordinate
    //% help=lights/get-coordinate weight=30
    //% block="coordinate $axis of light $light"
    //% block.loc.sl="koordinata $axis lučke $light"
    //% blockGap=40
    //% shim=lights::getCoordinate
    function getCoordinate(axis: Axis, light: number): number;

    /**
     * Get a list of lights
     */
    //% blockId=lights-list
    //% help=lights/list-lights weight=25
    //% block="array of lights"
    //% block.loc.sl="seznam lučk"
    //% shim=lights::getLights
    function getLights(): number[];

    /**
     * Get a number of lights
     */
    //% blockId=lights-count
    //% help=lights/count-lights weight=20
    //% block="number of lights"
    //% block.loc.sl="število lučk"
    //% shim=lights::countLights
    function countLights(): number;

    /**
     * Get a random light
     */
    //% blockId=lights-random
    //% help=lights/random-light weight=15
    //% block="random light"
    //% block.loc.sl="naključna lučka"
    //% shim=lights::randomLight
    function randomLight(): number;

}
declare namespace shapes {
    /**
     * Get a list of lights intersecting with the ball
     * @param x0 the x coordinate of the ball center
     * @param y0 the y coordinate of the ball center
     * @param z0 the z coordinate of the ball center
     * @param r0 the radius of the ball
     */
    //% blockId=shapes-ball
    //% help=shapes/ball weight=50
    //% block="ball with center | x: $x0 | y: $y0 | z: $z0 | and radius $r0"
    //% block.loc.sl="krogla s središčem | x: $x0 | y: $y0 | z: $z0 | in polmerom $r0"
    //% inlineInputMode=external
    //% r0.min=0
    //% shim=shapes::ball
    function ball(x0: number, y0: number, z0: number, r0: number): number[];

    /**
     * Get a list of lights intersecting with the sphere
     * @param x0 the x coordinate of the sphere center
     * @param y0 the y coordinate of the sphere center
     * @param z0 the z coordinate of the sphere center
     * @param r0 the radius of the sphere
     * @param d the thickness of the sphere
     */
    //% blockId=shapes-sphere
    //% help=shapes/sphere weight=50
    //% block="sphere with center | x: $x0 | y: $y0 | z: $z0 | radius $r0 | and thickness $d"
    //% block.loc.sl="sfera s središčem | x: $x0 | y: $y0 | z: $z0 | polmerom $r0 | in debelino $d"
    //% inlineInputMode=external
    //% r0.min=0
    //% shim=shapes::sphere
    function sphere(x0: number, y0: number, z0: number, r0: number, d: number): number[];

    /**
     * Get a list of lights intersecting with the cilinder
     * @param x0 the x coordinate of the cilinder center
     * @param y0 the y coordinate of the cilinder center
     * @param z0 the z coordinate of the cilinder center
     * @param r the radius of the cilinder
     * @param h the hight of the cilinder
     * @param phi the first rotation of the cilinder
     * @param ksi the second rotation of the cilinder
     */
    //% blockId=shapes-cilinder
    //% help=shapes/cilinder weight=50
    //% block="cilinder with center | x: $x0 | y: $y0 | z: $z0 | radius $r0 | hight $h0 | rotation $ksi | and rotation $phi"
    //% block.loc.sl="valj s središčem | x: $x0 | y: $y0 | z: $z0 | in polmerom $r0 | višino $h0 | rotacijo $ksi | in rotacijo $phi"
    //% inlineInputMode=external
    //% r0.min=0
    //% shim=shapes::cilinder
    function cilinder(x0: number, y0: number, z0: number, r0: number, h0: number, phi: number, ksi: number): number[];

    /**
     * Get a list of lights intersecting with the ball
     * @param x0 the x coordinate of the point in plane
     * @param y0 the y coordinate of the point in plane
     * @param z0 the z coordinate of the point in plane
     * @param a the x coordinate of direction vector
     * @param b the y coordinate of direction vector
     * @param c the z coordinate of direction vector
     * @param d the thickness of the plane
     */
    //% blockId=shapes-plane
    //% help=shapes/plane weight=50
    //% block="plane with point | x: $x0 | y: $y0 | z: $z0 | direction vector | x: $a | y: $b | z: $c and thickness $d"
    //% block.loc.sl="ravnina s točko | x: $x0 | y: $y0 | z: $z0 | smernim vektorjem | x: $a | y: $b | z: $c in debelino $d"
    //% inlineInputMode=external
    //% shim=shapes::plane
    function plane(x0: number, y0: number, z0: number, a: number, b: number, c: number, d: number): number[];

    /**
     * Get a list of in relation to the plane
     * @param x0 the x coordinate of the point in plane
     * @param y0 the y coordinate of the point in plane
     * @param z0 the z coordinate of the point in plane
     * @param a the x coordinate of direction vector
     * @param b the y coordinate of direction vector
     * @param c the z coordinate of direction vector
     */
    //% blockId=shapes-greaterPlane
    //% help=shapes/greaterPlane weight=50
    //% block="plane with point | x: $x0 | y: $y0 | z: $z0 | and direction vector | x: $a | y: $b | z: $c"
    //% block.loc.sl="večje od ravnine s točko | x: $x0 | y: $y0 | z: $z0 | in smernim vektorjem | x: $a | y: $b | z: $c"
    //% inlineInputMode=external
    //% shim=shapes::greaterPlane
    function greaterPlane(x0: number, y0: number, z0: number, a: number, b: number, c: number): number[];

}

// Auto-generated. Do not edit. Really.
