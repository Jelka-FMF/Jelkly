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

        return toRefCollection(lights)
    }

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
    export function sphere (x0: number, y0: number, z0: number, r0: number, d:number): number[] {
        const lights = []

        for (const [index, { x, y, z }] of Object.entries(positions)) {
            if (Math.pow(x - x0, 2) + Math.pow(y - y0, 2) + Math.pow(z - z0, 2) <= Math.pow(r0, 2)
            && Math.pow(x - x0, 2) + Math.pow(y - y0, 2) + Math.pow(z - z0, 2) >= Math.pow(r0 - d, 2)) {
                lights.push(parseInt(index))
            }
        }

        return toRefCollection(lights)
        
    }


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
    export function cilinder (x0: number, y0: number, z0: number, r0: number, h0:number, phi:number, ksi:number): number[] {
        const lights = []

        for (const [index, { x, y, z }] of Object.entries(positions)) {
            let directionVector = {x:Math.cos(phi), y:Math.sin(phi), z:Math.sin(ksi)};
            let pointVector = {x:x - x0, y:y - y0, z:z - z0};

            let deltaSquerd = ( // distance between point and line
                Math.pow(directionVector.y * z - y * directionVector.z, 2) +
                Math.pow(directionVector.z * x - z * directionVector.x, 2) +
                Math.pow(directionVector.x * y - x * directionVector.y, 2)
            ) / (Math.pow(directionVector.x, 2) + Math.pow(directionVector.y, 2) + Math.pow(directionVector.z, 2));

            if (deltaSquerd <= r0 * r0) {
                lights.push(parseInt(index))
            }
            
        }

        return toRefCollection(lights)
    }

}
