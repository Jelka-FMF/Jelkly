function degToRad (deg: number) {
    return deg / 180 * Math.PI
}

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
     * @param r the radius of the ball
     */
    //% blockId=shapes-ball
    //% help=shapes/ball weight=50
    //% block="ball with center | x: $x0 | y: $y0 | z: $z0 | and radius $r"
    //% block.loc.sl="krogla s središčem | x: $x0 | y: $y0 | z: $z0 | in polmerom $r"
    //% inlineInputMode=external
    //% r.min=0
    export function ball (x0: number, y0: number, z0: number, r: number): number[] {
        const lights = []

        for (const [index, { x, y, z }] of Object.entries(positions)) {
            if (Math.pow(x - x0, 2) + Math.pow(y - y0, 2) + Math.pow(z - z0, 2) <= Math.pow(r, 2)) {
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
     * @param r the radius of the sphere
     * @param d the thickness of the sphere
     */
    //% blockId=shapes-sphere
    //% help=shapes/sphere weight=50
    //% block="sphere with center | x: $x0 | y: $y0 | z: $z0 | radius $r | and thickness $d"
    //% block.loc.sl="sfera s središčem | x: $x0 | y: $y0 | z: $z0 | polmerom $r | in debelino $d"
    //% inlineInputMode=external
    //% r.min=0
    //% d.min=0
    export function sphere (x0: number, y0: number, z0: number, r: number, d: number): number[] {
        const lights = []

        for (const [index, { x, y, z }] of Object.entries(positions)) {
            if (
                Math.pow(x - x0, 2) + Math.pow(y - y0, 2) + Math.pow(z - z0, 2) <= Math.pow(r, 2)
                && Math.pow(x - x0, 2) + Math.pow(y - y0, 2) + Math.pow(z - z0, 2) >= Math.pow(r - d, 2)
            ) {
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
     * @param psi the first rotation of the cilinder (in degrees)
     * @param ksi the second rotation of the cilinder (in degrees)
     * @param r the radius of the cilinder
     * @param h the height of the cilinder
     */
    //% blockId=shapes-cilinder
    //% help=shapes/cilinder weight=50
    //% block="cilinder with center | x: $x0 | y: $y0 | z: $z0 | first rotation $psi | second rotation $ksi | radius $r | and height $h"
    //% block.loc.sl="valj s središčem | x: $x0 | y: $y0 | z: $z0 | prvo rotacijo $psi | drugo rotacijo $ksi | polmerom $r | in višino $h"
    //% inlineInputMode=external
    //% psi.min=0 psi.max=360
    //% ksi.min=0 ksi.max=360
    //% r.min=0
    //% h.min=0
    export function cilinder (x0: number, y0: number, z0: number, psi: number, ksi: number, r: number, h: number): number[] {
        psi = degToRad(psi)
        ksi = degToRad(ksi)

        const a = Math.cos(psi) * Math.cos(ksi)
        const b = Math.sin(psi) * Math.cos(ksi)
        const c = Math.sin(ksi)

        const lights = []

        for (const [index, { x, y, z }] of Object.entries(positions)) {
            let pointVector = { x: x - x0, y: y - y0, z: z - z0 }

            // Distance between point and line
            let delta = (
                Math.pow(b * z - y * c, 2) +
                Math.pow(c * x - z * a, 2) +
                Math.pow(a * y - x * b, 2)
            ) / Math.sqrt(
                Math.pow(a, 2) +
                Math.pow(b, 2) +
                Math.pow(c, 2),
            )

            // Remove lights that are too high or too low using plains
            let d1 = (a * h + x0) * a + (b * h + y0) * b + (c * h + z0) * c
            let d2 = (a * -h + x0) * a + (b * -h + y0) * b + (c * -h + z0) * c

            let d = (a * a + b * b + c * c)

            if (delta <= r && d1 >= d && d2 <= d) {
                lights.push(parseInt(index))
            }
        }

        return toRefCollection(lights)
    }

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
    //% block="plane with point | x: $x0 | y: $y0 | z: $z0 | first rotation $psi | second rotation $ksi | and thickness $d"
    //% block.loc.sl="ravnina s točko | x: $x0 | y: $y0 | z: $z0 | prvo rotacijo $psi | drugo rotacijo $ksi | in debelino $d"
    //% inlineInputMode=external
    //% psi.min=0 psi.max=360
    //% ksi.min=0 ksi.max=360
    //% d.min=0
    export function plane (x0: number, y0: number, z0: number, psi: number, ksi: number, d: number): number[] {
        psi = degToRad(psi)
        ksi = degToRad(ksi)

        const a = Math.cos(psi) * Math.cos(ksi)
        const b = Math.sin(psi) * Math.cos(ksi)
        const c = Math.sin(ksi)

        const lights = []

        for (const [index, { x, y, z }] of Object.entries(positions)) {
            let distance = Math.abs((a * (x - x0) + b * (y - y0) + c * (z - z0)) / Math.sqrt(a * a + b * b + c * c))

            if (distance <= d / 2) {
                lights.push(parseInt(index))
            }
        }

        return toRefCollection(lights)
    }

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
    //% inlineInputMode=external
    //% psi.min=0 psi.max=360
    //% ksi.min=0 ksi.max=360
    export function planeRelation (x0: number, y0: number, z0: number, psi: number, ksi: number, relation: Relation): number[] {
        psi = degToRad(psi)
        ksi = degToRad(ksi)

        const a = Math.cos(psi) * Math.cos(ksi)
        const b = Math.sin(psi) * Math.cos(ksi)
        const c = Math.sin(ksi)

        const d = a * x0 + b * y0 + c * z0

        const lights = []

        for (const [index, { x, y, z }] of Object.entries(positions)) {
            switch (relation) {
                case Relation.Greater:
                    if (a * x + b * y + c * z > d) lights.push(parseInt(index))
                    break
                case Relation.Less:
                    if (a * x + b * y + c * z < d) lights.push(parseInt(index))
                    break
            }
        }

        return toRefCollection(lights)
    }
}
