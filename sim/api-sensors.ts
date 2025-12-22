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
    //% block="joystick angle"
    //% block.loc.sl="kot igralne palice"
    //% jsdoc.loc.sl="Pridobi vrednost kota igralne palice"
    export function joystickAngle (): number {
        return pxsim.board().joystickState.angle
    }
}
