type GlobalButton = Button;

/**
 * Provides access to sensors.
 */
//% color=#2E6F40 weight=116 icon="\uf14e"
//% block="Sensors"
//% block.loc.sl="Senzorji"
namespace pxsim.sensors {
    /**
     * Get the distance value from the joystick
     */
    //% blockId=sensors-joystick-distance
    //% help=sensors/joystick-distance weight=55
    //% block="joystick distance"
    //% block.loc.sl="razdalja igralne palice"
    //% jsdoc.loc.sl="Pridobi vrednost razdalje igralne palice"
    export function joystickDistance (): number {
        return pxsim.board().joystickState.distance
    }

    /**
     * Get the angle value from the joystick
     */
    //% blockId=sensors-joystick-angle
    //% help=sensors/joystick-angle weight=45
    //% help=sensors/joystick-angle weight=54
    //% block="joystick angle"
    //% block.loc.sl="kot igralne palice"
    //% jsdoc.loc.sl="Pridobi vrednost kota igralne palice"
    //% blockGap=40
    export function joystickAngle (): number {
        return pxsim.board().joystickState.angle
    }

    /**
     * Get the state of a button
     */
    //% blockId=sensors-button-pressed
    //% help=sensors/button-pressed weight=45
    //% block="button %button pressed"
    //% block.loc.sl="gumb %button pritisnjen"
    //% jsdoc.loc.sl="Pridobi stanje gumba"
    export function buttonPressed (button: GlobalButton): boolean {
        return pxsim.board().buttonsState[button]
    }
}
