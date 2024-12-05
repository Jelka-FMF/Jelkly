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
    //% block="ball with center | x: $x0 | y: $y0 | z: $z0 | radius $r"
    //% block.loc.sl="krogla s središčem | x: $x0 | y: $y0 | z: $z0 | polmerom $r"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki se sekajo s kroglo"
    //% x0.loc.sl="x koordinata središča krogle"
    //% y0.loc.sl="y koordinata središča krogle"
    //% z0.loc.sl="z koordinata središča krogle"
    //% r.loc.sl="polmer krogle"
    //% inlineInputMode=external
    //% r.min=0
    export function ball (x0: number, y0: number, z0: number, r: number): number[] {
        const lights = []

        for (const [index, { x, y, z }] of Object.entries(normalizedPositions)) {
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
    export function sphere (x0: number, y0: number, z0: number, r: number, d: number): number[] {
        const lights = []

        for (const [index, { x, y, z }] of Object.entries(normalizedPositions)) {
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
    export function cylinder (x0: number, y0: number, z0: number, psi: number, ksi: number, r: number, h: number): number[] {
        psi = degToRad(psi)
        ksi = degToRad(ksi)

        // const a = Math.cos(psi) * Math.cos(ksi)
        // const b = Math.sin(psi) * Math.cos(ksi)
        // const c = Math.sin(ksi)

        let coordinates = getRotatedCoordinates(0, 0, 1, psi, ksi)
        const a = coordinates.x
        const b = coordinates.y
        const c = coordinates.z
        // const directionVectorLenght = Math.sqrt(a*a + b*b + c*c)

        // const normalizeDirectionVector = {x: a / directionVectorLenght, y:b / directionVectorLenght, z: c/directionVectorLenght}

        const lights = []

        for (const [index, { x, y, z }] of Object.entries(normalizedPositions)) {

            // Distance between point and line
            let deltaKvadrat = (
                Math.pow(b * (z-z0) - (y-y0) * c, 2) +
                Math.pow(c * (x-x0) - (z-z0) * a, 2) +
                Math.pow(a * (y-y0) - (x-x0) * b, 2)
            ) / (
                Math.pow(a, 2) +
                Math.pow(b, 2) +
                Math.pow(c, 2)
            )


            // Remove lights that are too high or too low using plains
            // let d1 = (a * h + x0) * a + (b * h + y0) * b + (c * h + z0) * c
            // let d2 = (a * (-h) + x0) * a + (b * (-h) + y0) * b + (c * (-h) + z0) * c

            // let d = (a * x + b * y + c * z)

            let delta1 = (a*(x-h*a) + b*(y - h*b) + c*(z - h*c))
            let delta2 = (a*(x+h*a) + b*(y + h*b) + c*(z + h*c))


            if (deltaKvadrat <= r * r && delta1 + delta2 <= h) {
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
    export function plane (x0: number, y0: number, z0: number, psi: number, ksi: number, d: number): number[] {
        psi = degToRad(psi)
        ksi = degToRad(ksi)

        const a = Math.cos(psi) * Math.cos(ksi)
        const b = Math.sin(psi) * Math.cos(ksi)
        const c = Math.sin(ksi)

        const lights = []

        for (const [index, { x, y, z }] of Object.entries(normalizedPositions)) {
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
    export function planeRelation (x0: number, y0: number, z0: number, psi: number, ksi: number, relation: Relation): number[] {
        psi = degToRad(psi)
        ksi = degToRad(ksi)

        const a = Math.cos(psi) * Math.cos(ksi)
        const b = Math.sin(psi) * Math.cos(ksi)
        const c = Math.sin(ksi)

        const d = a * x0 + b * y0 + c * z0

        const lights = []

        for (const [index, { x, y, z }] of Object.entries(normalizedPositions)) {
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
