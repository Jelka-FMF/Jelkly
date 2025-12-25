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
     * @param lights the list of lights to check
     */
    //% blockId=shapes-ball
    //% help=shapes/ball weight=50
    //% block="ball with center | x: $x0 | y: $y0 | z: $z0 | radius $r || from lights $lights"
    //% block.loc.sl="krogla s središčem | x: $x0 | y: $y0 | z: $z0 | polmerom $r || iz lučk $lights"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki se sekajo s kroglo"
    //% x0.loc.sl="x koordinata središča krogle"
    //% y0.loc.sl="y koordinata središča krogle"
    //% z0.loc.sl="z koordinata središča krogle"
    //% r.loc.sl="polmer krogle"
    //% lights.loc.sl="seznam lučk, ki jih želimo preveriti"
    //% inlineInputMode=external
    //% z0.defl=50
    //% r.min=0 r.defl=20
    //% lights.shadow="lights-list"
    export function ball (x0: number, y0: number, z0: number, r: number, lights?: number[]): number[] {
        // Default to all lights
        if (lights === undefined) lights = Object.keys(positions).map(Number)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        const result: number[] = []

        for (const index of lights) {
            const { x, y, z } = normalizedPositions[index]
            if (Math.pow(x - x0, 2) + Math.pow(y - y0, 2) + Math.pow(z - z0, 2) <= Math.pow(r, 2)) {
                result.push(index)
            }
        }

        return toRefCollection(result)
    }

    /**
     * Get a list of lights intersecting with the sphere
     * @param x0 the x coordinate of the sphere center
     * @param y0 the y coordinate of the sphere center
     * @param z0 the z coordinate of the sphere center
     * @param r the radius of the sphere
     * @param d the thickness of the sphere
     * @param lights the list of lights to check
     */
    //% blockId=shapes-sphere
    //% help=shapes/sphere weight=50
    //% block="sphere with center | x: $x0 | y: $y0 | z: $z0 | radius $r | thickness $d || from lights $lights"
    //% block.loc.sl="sfera s središčem | x: $x0 | y: $y0 | z: $z0 | polmerom $r | debelino $d || iz lučk $lights"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki se sekajo s sfero"
    //% x0.loc.sl="x koordinata središča sfere"
    //% y0.loc.sl="y koordinata središča sfere"
    //% z0.loc.sl="z koordinata središča sfere"
    //% r.loc.sl="polmer sfere"
    //% d.loc.sl="debelina sfere"
    //% lights.loc.sl="seznam lučk, ki jih želimo preveriti"
    //% inlineInputMode=external
    //% z0.defl=50
    //% r.min=0 r.defl=20
    //% d.min=0 d.defl=5
    //% lights.shadow="lights-list"
    export function sphere (x0: number, y0: number, z0: number, r: number, d: number, lights?: number[]): number[] {
        // Default to all lights
        if (lights === undefined) lights = Object.keys(positions).map(Number)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        const result: number[] = []

        for (const index of lights) {
            const { x, y, z } = normalizedPositions[index]
            if (
                Math.pow(x - x0, 2) + Math.pow(y - y0, 2) + Math.pow(z - z0, 2) <= Math.pow(r, 2)
                && Math.pow(x - x0, 2) + Math.pow(y - y0, 2) + Math.pow(z - z0, 2) >= Math.pow(r - d, 2)
            ) {
                result.push(index)
            }
        }

        return toRefCollection(result)

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
     * @param lights the list of lights to check
     */
    //% blockId=shapes-cylinder
    //% help=shapes/cylinder weight=50
    //% block="cylinder with center | x: $x0 | y: $y0 | z: $z0 | first rotation $psi | second rotation $ksi | radius $r | height $h || from lights $lights"
    //% block.loc.sl="valj s središčem | x: $x0 | y: $y0 | z: $z0 | prvo rotacijo $psi | drugo rotacijo $ksi | polmerom $r | višino $h || iz lučk $lights"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki se sekajo z valjem"
    //% x0.loc.sl="x koordinata središča valja"
    //% y0.loc.sl="y koordinata središča valja"
    //% z0.loc.sl="z koordinata središča valja"
    //% psi.loc.sl="prva rotacija valja (v stopinjah)"
    //% ksi.loc.sl="druga rotacija valja (v stopinjah)"
    //% r.loc.sl="polmer valja"
    //% h.loc.sl="višina valja"
    //% lights.loc.sl="seznam lučk, ki jih želimo preveriti"
    //% inlineInputMode=external
    //% z0.defl=50
    //% psi.min=0 psi.max=360
    //% ksi.min=0 ksi.max=360
    //% r.min=0 r.defl=20
    //% h.min=0 h.defl=10
    //% lights.shadow="lights-list"
    export function cylinder (x0: number, y0: number, z0: number, psi: number, ksi: number, r: number, h: number, lights?: number[]): number[] {
        // Default to all lights
        if (lights === undefined) lights = Object.keys(positions).map(Number)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        psi = degToRad(psi)
        ksi = degToRad(ksi)

        const a = Math.cos(psi) * Math.cos(ksi)
        const b = Math.sin(psi) * Math.cos(ksi)
        const c = Math.sin(ksi)

        const result: number[] = []

        for (const index of lights) {
            const { x, y, z } = normalizedPositions[index]

            // Distance between point and line
            let deltaKvadrat = (
                Math.pow(b * (z - z0) - (y - y0) * c, 2) +
                Math.pow(c * (x - x0) - (z - z0) * a, 2) +
                Math.pow(a * (y - y0) - (x - x0) * b, 2)
            ) / (
                Math.pow(a, 2) +
                Math.pow(b, 2) +
                Math.pow(c, 2)
            )

            let delta1 = Math.abs(a * (x - x0 - h * a / 2) + b * (y - y0 - h * b / 2) + c * (z - z0 - h * c / 2))
            let delta2 = Math.abs(a * (x - x0 + h * a / 2) + b * (y - y0 + h * b / 2) + c * (z - z0 + h * c / 2))

            if (deltaKvadrat <= r * r && delta1 + delta2 <= h) {
                result.push(index)
            }
        }

        return toRefCollection(result)
    }

    /**
     * Get a list of lights intersecting with the plane
     * @param x0 the x coordinate of the point in the plane
     * @param y0 the y coordinate of the point in the plane
     * @param z0 the z coordinate of the point in the plane
     * @param psi the first rotation of the plane (in degrees)
     * @param ksi the second rotation of the plane (in degrees)
     * @param d the thickness of the plane
     * @param lights the list of lights to check
     */
    //% blockId=shapes-plane
    //% help=shapes/plane weight=50
    //% block="plane with point | x: $x0 | y: $y0 | z: $z0 | first rotation $psi | second rotation $ksi | thickness $d || from lights $lights"
    //% block.loc.sl="ravnina s točko | x: $x0 | y: $y0 | z: $z0 | prvo rotacijo $psi | drugo rotacijo $ksi | debelino $d || iz lučk $lights"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki se sekajo z ravnino"
    //% x0.loc.sl="x koordinata točke na ravnini"
    //% y0.loc.sl="y koordinata točke na ravnini"
    //% z0.loc.sl="z koordinata točke na ravnini"
    //% psi.loc.sl="prva rotacija ravnine (v stopinjah)"
    //% ksi.loc.sl="druga rotacija ravnine (v stopinjah)"
    //% d.loc.sl="debelina ravnine"
    //% lights.loc.sl="seznam lučk, ki jih želimo preveriti"
    //% inlineInputMode=external
    //% z0.defl=50
    //% psi.min=0 psi.max=360
    //% ksi.min=0 ksi.max=360
    //% d.min=0 d.defl=10
    //% lights.shadow="lights-list"
    export function plane (x0: number, y0: number, z0: number, psi: number, ksi: number, d: number, lights?: number[]): number[] {
        // Default to all lights
        if (lights === undefined) lights = Object.keys(positions).map(Number)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        psi = degToRad(psi)
        ksi = degToRad(ksi)

        const a = Math.cos(psi) * Math.cos(ksi)
        const b = Math.sin(psi) * Math.cos(ksi)
        const c = Math.sin(ksi)

        const result: number[] = []

        for (const index of lights) {
            const { x, y, z } = normalizedPositions[index]
            let distance = Math.abs((a * (x - x0) + b * (y - y0) + c * (z - z0)) / Math.sqrt(a * a + b * b + c * c))

            if (distance <= d / 2) {
                result.push(index)
            }
        }

        return toRefCollection(result)
    }

    /**
     * Get a list of lights in relation to the plane
     * @param relation the relation to compare against
     * @param x0 the x coordinate of the point in plane
     * @param y0 the y coordinate of the point in plane
     * @param z0 the z coordinate of the point in plane
     * @param psi the first rotation of the plane (in degrees)
     * @param ksi the second rotation of the plane (in degrees)
     * @param lights the list of lights to check
     */
    //% blockId=shapes-plane-relation
    //% help=shapes/plane-relation weight=50
    //% block="$relation than plane with point | x: $x0 | y: $y0 | z: $z0 | first rotation $psi | second rotation $ksi || from lights $lights"
    //% block.loc.sl="$relation od ravnine s točko | x: $x0 | y: $y0 | z: $z0 | prvo rotacijo $psi | drugo rotacijo $ksi || iz lučk $lights"
    //% jsdoc.loc.sl="Vrni seznam lučk, ki so v razmerju z ravnino"
    //% relation.loc.sl="razmerje, ki ga želimo preveriti"
    //% x0.loc.sl="x koordinata točke na ravnini"
    //% y0.loc.sl="y koordinata točke na ravnini"
    //% z0.loc.sl="z koordinata točke na ravnini"
    //% psi.loc.sl="prva rotacija ravnine (v stopinjah)"
    //% ksi.loc.sl="druga rotacija ravnine (v stopinjah)"
    //% lights.loc.sl="seznam lučk, ki jih želimo preveriti"
    //% inlineInputMode=external
    //% z0.defl=50
    //% psi.min=0 psi.max=360
    //% ksi.min=0 ksi.max=360
    //% lights.shadow="lights-list"
    export function planeRelation (x0: number, y0: number, z0: number, psi: number, ksi: number, relation: Relation, lights?: number[]): number[] {
        // Default to all lights
        if (lights === undefined) lights = Object.keys(positions).map(Number)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        psi = degToRad(psi)
        ksi = degToRad(ksi)

        const a = Math.cos(psi) * Math.cos(ksi)
        const b = Math.sin(psi) * Math.cos(ksi)
        const c = Math.sin(ksi)

        const d = a * x0 + b * y0 + c * z0

        const result: number[] = []

        for (const index of lights) {
            const { x, y, z } = normalizedPositions[index]
            switch (relation) {
                case Relation.Greater:
                    if (a * x + b * y + c * z > d) result.push(index)
                    break
                case Relation.Less:
                    if (a * x + b * y + c * z < d) result.push(index)
                    break
            }
        }

        return toRefCollection(result)
    }
}
