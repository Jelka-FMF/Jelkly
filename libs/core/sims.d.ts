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
    function setLights(lights: number | {}, color: Color): void;

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
    function getColors(lights: number | {}): {};

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
    function getCoordinates(axis: Axis, lights: number | {}): {};

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
    function getLights(): {};

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
    function ball(x0: number, y0: number, z0: number, r0: number): {};

}

// Auto-generated. Do not edit. Really.
