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
    //% jsdoc.loc.sl="Nastavi število sličic na sekundo"
    //% frameRate.loc.sl="število sličic na sekundo"
    //% frameRate.min=1 frameRate.max=60 frameRate.defl=50
    //% shim=basic::setFrameRate
    function setFrameRate(frameRate: number): void;

    /**
     * Repeat the code for each frame
     * @param handler the code to execute
     * @param handler.frameNumber the current frame number
     * @param handler.timeSinceStart the time since start in milliseconds
     */
    //% blockId=pxt-on-frame afterOnStart=true
    //% draggableParameters="reporter"
    //% help=basic/on-frame weight=55
    //% block="on frame $frameNumber $timeSinceStart"
    //% block.loc.sl="na sličici $frameNumber $timeSinceStart"
    //% jsdoc.loc.sl="Izvedi kodo ob vsaki sličici"
    //% handler.loc.sl="koda za izvedbo"
    //% frameNumber.loc.sl="trenutna številka sličice"
    //% timeSinceStart.loc.sl="čas od začetka v milisekundah"
    //% shim=basic::onFrame
    function onFrame(handler: (frameNumber: number, timeSinceStart: number) => void): void;

}
declare namespace colors {
    /**
     * Generate a random color
     */
    //% blockId=colors-random
    //% help=colors/random-color weight=55
    //% block="random color"
    //% block.loc.sl="naključna barva"
    //% jsdoc.loc.sl="Ustvari naključno barvo"
    //% blockGap=40
    //% shim=colors::randomColor
    function randomColor(): Color;

    /**
     * Create an RGB color
     * @param red the intensity of red (0-255)
     * @param green the intensity of green (0-255)
     * @param blue the intensity of blue (0-255)
     */
    //% blockId=colors-rgb
    //% help=colors/rgb-color weight=45
    //% block="red $red | green $green | blue $blue"
    //% block.loc.sl="rdeča $red | zelena $green | modra $blue"
    //% jsdoc.loc.sl="Ustvari RGB barvo"
    //% red.loc.sl="vrednost rdeče komponente (0-255)"
    //% green.loc.sl="vrednost zelene komponente (0-255)"
    //% blue.loc.sl="vrednost modre komponente (0-255)"
    //% inlineInputMode=external
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    //% shim=colors::rgbColor
    function rgbColor(red: number, green: number, blue: number): Color;

    /**
     * Create an HSL color
     * @param hue the hue of the color (0-360)
     * @param saturation the saturation of the color (0-100)
     * @param lightness the lightness of the color (0-100)
     */
    //% blockId=colors-hsl
    //% help=colors/hsl-color weight=44
    //% block="hue $hue | saturation $saturation | lightness $lightness"
    //% block.loc.sl="odtenek $hue | nasičenost $saturation | svetlost $lightness"
    //% jsdoc.loc.sl="Ustvari HSL barvo"
    //% hue.loc.sl="barvni odtenek (0-360)"
    //% saturation.loc.sl="nasičenost barve (0-100)"
    //% lightness.loc.sl="svetlost barve (0-100)"
    //% inlineInputMode=external
    //% hue.min=0 hue.max=360
    //% saturation.min=0 saturation.max=100 saturation.defl=100
    //% lightness.min=0 lightness.max=100 lightness.defl=50
    //% shim=colors::hslColor
    function hslColor(hue: number, saturation: number, lightness: number): Color;

    /**
     * Create an HSV color
     * @param hue the hue of the color (0-360)
     * @param saturation the saturation of the color (0-100)
     * @param value the value of the color (0-100)
     */
    //% blockId=colors-hsv
    //% help=colors/hsv-color weight=43
    //% block="hue $hue | saturation $saturation | value $value"
    //% block.loc.sl="odtenek $hue | nasičenost $saturation | vrednost $value"
    //% jsdoc.loc.sl="Ustvari HSV barvo"
    //% hue.loc.sl="barvni odtenek (0-360)"
    //% saturation.loc.sl="nasičenost barve (0-100)"
    //% value.loc.sl="vrednost barve (0-100)"
    //% inlineInputMode=external
    //% hue.min=0 hue.max=360
    //% saturation.min=0 saturation.max=100 saturation.defl=100
    //% value.min=0 value.max=100 value.defl=100
    //% shim=colors::hsvColor
    function hsvColor(hue: number, saturation: number, value: number): Color;

    /**
     * Create a CMYK color
     * @param cyan the intensity of cyan (0-100)
     * @param magenta the intensity of magenta (0-100)
     * @param yellow the intensity of yellow (0-100)
     * @param key the intensity of black (0-100)
     */
    //% blockId=colors-cmyk
    //% help=colors/cmyk-color weight=42
    //% block="cyan $cyan | magenta $magenta | yellow $yellow | key $key"
    //% block.loc.sl="cian $cyan | magenta $magenta | rumena $yellow | črna $key"
    //% jsdoc.loc.sl="Ustvari CMYK barvo"
    //% cyan.loc.sl="vrednost cian komponente (0-100)"
    //% magenta.loc.sl="vrednost magenta komponente (0-100)"
    //% yellow.loc.sl="vrednost rumene komponente (0-100)"
    //% key.loc.sl="vrednost črne komponente (0-100)"
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
     * @param component the RGB component to get
     * @param color the color to get the component from
     */
    //% blockId=colors-rgb-component
    //% help=colors/rgb-component weight=35
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    //% jsdoc.loc.sl="Vrne vrednost RGB komponente barve"
    //% component.loc.sl="komponenta barve"
    //% color.loc.sl="želena barva"
    //% shim=colors::rgbComponent
    function rgbComponent(component: RgbComponent, color: Color): number;

    /**
     * Get an HSL component of a color
     * @param component the HSL component to get
     * @param color the color to get the component from
     */
    //% blockId=colors-hsl-component
    //% help=colors/hsl-component weight=34
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    //% jsdoc.loc.sl="Vrne vrednost HSL komponente barve"
    //% component.loc.sl="komponenta barve"
    //% color.loc.sl="želena barva"
    //% shim=colors::hslComponent
    function hslComponent(component: HslComponent, color: Color): number;

    /**
     * Get an HSV component of a color
     * @param component the HSV component to get
     * @param color the color to get the component from
     */
    //% blockId=colors-hsv-component
    //% help=colors/hsv-component weight=33
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    //% jsdoc.loc.sl="Vrne vrednost HSV komponente barve"
    //% component.loc.sl="komponenta barve"
    //% color.loc.sl="želena barva"
    //% shim=colors::hsvComponent
    function hsvComponent(component: HsvComponent, color: Color): number;

    /**
     * Get a CMYK component of a color
     * @param component the CMYK component to get
     * @param color the color to get the component from
     */
    //% blockId=colors-cmyk-component
    //% help=colors/cmyk-component weight=32
    //% block="component $component of $color"
    //% block.loc.sl="komponenta $component od $color"
    //% jsdoc.loc.sl="Vrne vrednost CMYK komponente barve"
    //% component.loc.sl="komponenta barve"
    //% color.loc.sl="želena barva"
    //% shim=colors::cmykComponent
    function cmykComponent(component: CmykComponent, color: Color): number;

}
declare namespace lights {
    /**
     * Set lights to the specified color
     * @param lights a single light or an array of lights
     * @param color the RGB color of the lights to set
     */
    //% blockId=lights-set
    //% help=lights/set-lights weight=55
    //% block="set lights $lights to color $color"
    //% block.loc.sl="nastavi lučke $lights na barvo $color"
    //% jsdoc.loc.sl="Nastavi lučke na določeno barvo"
    //% lights.loc.sl="lučka ali seznam lučk, ki jih želimo nastaviti"
    //% color.loc.sl="barva lučk, ki jo želimo nastaviti"
    //% shim=lights::setLights
    function setLights(lights: number | number[], color: Color): void;

    /**
     * Turn off all lights
     */
    //% blockId=lights-reset
    //% help=lights/reset-lights weight=54
    //% block="reset lights"
    //% block.loc.sl="ponastavi lučke"
    //% jsdoc.loc.sl="Izklopi vse lučke"
    //% blockGap=40
    //% shim=lights::resetLights
    function resetLights(): void;

    /**
     * Get the colors of the specified lights
     * @param lights the lights to get the colors of
     */
    //% blockId=lights-get-colors
    //% help=lights/get-colors weight=25
    //% block="colors of lights $lights"
    //% block.loc.sl="barve lučk $lights"
    //% jsdoc.loc.sl="Vrni barve izbranih lučk"
    //% lights.loc.sl="lučke, za katere želimo barve"
    //% shim=lights::getColors
    function getColors(lights: number | number[]): Color[];

    /**
     * Get the color of the specified light
     * @param light the light to get the color of
     */
    //% blockId=lights-get-color
    //% help=lights/get-color weight=24
    //% block="color of light $light"
    //% block.loc.sl="barva lučke $light"
    //% jsdoc.loc.sl="Vrni barvo izbrane lučke"
    //% light.loc.sl="lučka, za katero želimo barvo"
    //% blockGap=40
    //% shim=lights::getColor
    function getColor(light: number): Color;

    /**
     * Get a list of lights
     */
    //% blockId=lights-list
    //% help=lights/list-lights weight=45
    //% block="array of lights"
    //% block.loc.sl="vse  lučke"
    //% jsdoc.loc.sl="Vrni seznam lučk"
    //% shim=lights::getLights
    function getLights(): number[];

    /**
     * Get a number of lights
     */
    //% blockId=lights-count
    //% help=lights/count-lights weight=44
    //% block="number of lights"
    //% block.loc.sl="število lučk"
    //% jsdoc.loc.sl="Vrni število lučk"
    //% shim=lights::countLights
    function countLights(): number;

    /**
     * Get a random light
     */
    //% blockId=lights-random
    //% help=lights/random-light weight=43
    //% block="random light"
    //% block.loc.sl="naključna lučka"
    //% jsdoc.loc.sl="Vrni naključno lučko"
    //% blockGap=40
    //% shim=lights::randomLight
    function randomLight(): number;

    /**
     * Find lights where the specified axis value meets the specified relation
     * @param axis the axis to check
     * @param relation the relation to check
     * @param value the value to compare against
     * @param lights the list of lights to check
     */
    //% blockId=lights-where
    //% help=lights/lights-where weight=35
    //% block="lights where $axis $relation $value from $lights"
    //% block.loc.sl="lučke kjer je $axis $relation $value iz $lights"
    //% jsdoc.loc.sl="Najdi lučke, kjer je vrednost osi v določenem razmerju"
    //% axis.loc.sl="os, ki jo želimo preveriti"
    //% relation.loc.sl="razmerje, ki ga želimo preveriti"
    //% value.loc.sl="vrednost, ki jo želimo preveriti"
    //% lights.loc.sl="seznam lučk, ki jih želimo preveriti"
    //% inlineInputMode="inline"
    //% lights.shadow="lights-list" lights.defl="lights-list"
    //% blockGap=40
    //% shim=lights::lightsWhere
    function lightsWhere(axis: Axis, relation: Relation, value: number, lights: number[]): number[];

}
declare namespace shapes {
    /**
     * Get a list of lights intersecting with the ball
     * @param x0 the x coordinate of the ball center
     * @param y0 the y coordinate of the ball center
     * @param z0 the z coordinate of the ball center
     * @param r the radius of the ball
     */
    //% blockId=shapes-ball
    //% help=shapes/ball weight=50
    //% block="ball with center | x: $x0 | y: $y0 | z: $z0 | radius $r"
    //% block.loc.sl="krogla s središčem | x: $x0 | y: $y0 | z: $z0 | polmerom $r"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki se sekajo s kroglo"
    //% x0.loc.sl="x koordinata središča krogle"
    //% y0.loc.sl="y koordinata središča krogle"
    //% z0.loc.sl="z koordinata središča krogle"
    //% r.loc.sl="polmer krogle"
    //% inlineInputMode=external
    //% r.min=0
    //% shim=shapes::ball
    function ball(x0: number, y0: number, z0: number, r: number): number[];

    /**
     * Get a list of lights intersecting with the sphere
     * @param x0 the x coordinate of the sphere center
     * @param y0 the y coordinate of the sphere center
     * @param z0 the z coordinate of the sphere center
     * @param r the radius of the sphere
     * @param d the thickness of the sphere
     */
    //% blockId=shapes-sphere
    //% help=shapes/sphere weight=50
    //% block="sphere with center | x: $x0 | y: $y0 | z: $z0 | radius $r | thickness $d"
    //% block.loc.sl="sfera s središčem | x: $x0 | y: $y0 | z: $z0 | polmerom $r | debelino $d"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki se sekajo s sfero"
    //% x0.loc.sl="x koordinata središča sfere"
    //% y0.loc.sl="y koordinata središča sfere"
    //% z0.loc.sl="z koordinata središča sfere"
    //% r.loc.sl="polmer sfere"
    //% d.loc.sl="debelina sfere"
    //% inlineInputMode=external
    //% r.min=0
    //% d.min=0
    //% shim=shapes::sphere
    function sphere(x0: number, y0: number, z0: number, r: number, d: number): number[];

    /**
     * Get a list of lights intersecting with the cylinder
     * @param x0 the x coordinate of the cylinder center
     * @param y0 the y coordinate of the cylinder center
     * @param z0 the z coordinate of the cylinder center
     * @param psi the first rotation of the cylinder (in degrees)
     * @param ksi the second rotation of the cylinder (in degrees)
     * @param r the radius of the cylinder
     * @param h the height of the cylinder
     */
    //% blockId=shapes-cylinder
    //% help=shapes/cylinder weight=50
    //% block="cylinder with center | x: $x0 | y: $y0 | z: $z0 | first rotation $psi | second rotation $ksi | radius $r | height $h"
    //% block.loc.sl="valj s središčem | x: $x0 | y: $y0 | z: $z0 | prvo rotacijo $psi | drugo rotacijo $ksi | polmerom $r | višino $h"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki se sekajo z valjem"
    //% x0.loc.sl="x koordinata središča valja"
    //% y0.loc.sl="y koordinata središča valja"
    //% z0.loc.sl="z koordinata središča valja"
    //% psi.loc.sl="prva rotacija valja (v stopinjah)"
    //% ksi.loc.sl="druga rotacija valja (v stopinjah)"
    //% r.loc.sl="polmer valja"
    //% h.loc.sl="višina valja"
    //% inlineInputMode=external
    //% psi.min=0 psi.max=360
    //% ksi.min=0 ksi.max=360
    //% r.min=0
    //% h.min=0
    //% shim=shapes::cylinder
    function cylinder(x0: number, y0: number, z0: number, psi: number, ksi: number, r: number, h: number): number[];

    /**
     * Get a list of lights intersecting with the plane
     * @param x0 the x coordinate of the point in the plane
     * @param y0 the y coordinate of the point in the plane
     * @param z0 the z coordinate of the point in the plane
     * @param psi the first rotation of the plane (in degrees)
     * @param ksi the second rotation of the plane (in degrees)
     * @param d the thickness of the plane
     */
    //% blockId=shapes-plane
    //% help=shapes/plane weight=50
    //% block="plane with point | x: $x0 | y: $y0 | z: $z0 | first rotation $psi | second rotation $ksi | thickness $d"
    //% block.loc.sl="ravnina s točko | x: $x0 | y: $y0 | z: $z0 | prvo rotacijo $psi | drugo rotacijo $ksi | debelino $d"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki se sekajo z ravnino"
    //% x0.loc.sl="x koordinata točke na ravnini"
    //% y0.loc.sl="y koordinata točke na ravnini"
    //% z0.loc.sl="z koordinata točke na ravnini"
    //% psi.loc.sl="prva rotacija ravnine (v stopinjah)"
    //% ksi.loc.sl="druga rotacija ravnine (v stopinjah)"
    //% d.loc.sl="debelina ravnine"
    //% inlineInputMode=external
    //% psi.min=0 psi.max=360
    //% ksi.min=0 ksi.max=360
    //% d.min=0
    //% shim=shapes::plane
    function plane(x0: number, y0: number, z0: number, psi: number, ksi: number, d: number): number[];

    /**
     * Get a list of lights in relation to the plane
     * @param relation the relation to compare against
     * @param x0 the x coordinate of the point in plane
     * @param y0 the y coordinate of the point in plane
     * @param z0 the z coordinate of the point in plane
     * @param psi the first rotation of the plane (in degrees)
     * @param ksi the second rotation of the plane (in degrees)
     */
    //% blockId=shapes-plane-relation
    //% help=shapes/plane-relation weight=50
    //% block="$relation than plane with point | x: $x0 | y: $y0 | z: $z0 | first rotation $psi | second rotation $ksi"
    //% block.loc.sl="$relation od ravnine s točko | x: $x0 | y: $y0 | z: $z0 | prvo rotacijo $psi | drugo rotacijo $ksi"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki so v razmerju z ravnino"
    //% relation.loc.sl="razmerje, ki ga želimo preveriti"
    //% x0.loc.sl="x koordinata točke na ravnini"
    //% y0.loc.sl="y koordinata točke na ravnini"
    //% z0.loc.sl="z koordinata točke na ravnini"
    //% psi.loc.sl="prva rotacija ravnine (v stopinjah)"
    //% ksi.loc.sl="druga rotacija ravnine (v stopinjah)"
    //% inlineInputMode=external
    //% psi.min=0 psi.max=360
    //% ksi.min=0 ksi.max=360
    //% shim=shapes::planeRelation
    function planeRelation(x0: number, y0: number, z0: number, psi: number, ksi: number, relation: Relation): number[];

}

// Auto-generated. Do not edit. Really.
