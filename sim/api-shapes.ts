/**
 * Provides access to shapes and objects.
 */
//% color=#313B72 weight=117 icon="\uf1b2"
//% block="Shapes"
//% block.loc.sl="Oblike"
namespace pxsim.shapes {
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
    export function ball (x0: number, y0: number, z0: number, r0: number): number[] {
        const lights = []

        for (const [index, { x, y, z }] of Object.entries(positions)) {
            if (Math.pow(x - x0, 2) + Math.pow(y - y0, 2) + Math.pow(z - z0, 2) <= r0 * r0) {
                lights.push(parseInt(index))
            }
        }

        return lights
    }
}
