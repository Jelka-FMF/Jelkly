/**
 * Provides access to controlling lights.
 */
//% color=#FF8C00 weight=119 icon="\uf0eb"
//% block="Lights"
//% block.loc.sl="Lučke"
namespace pxsim.lights {
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
    export function setLights (lights: number | number[], color: Color): void {
        // Check for null values
        pxtrt.nullCheck(lights)
        pxtrt.nullCheck(color)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        // Handle a single light case
        if (typeof lights === "number") lights = [lights]

        for (const light of lights) {
            if (color.red || color.green || color.blue) board().colorStates[light] = color
            else delete board().colorStates[light]
        }
    }

    /**
     * Turn off specified lights
     */
    //% blockId=lights-reset
    //% help=lights/reset-lights weight=54
    //% block="reset lights $lights"
    //% block.loc.sl="ponastavi lučke $lights"
    //% jsdoc.loc.sl="Izklopi izbrane lučke"
    //% lights.shadow="lights-list" lights.defl="lights-list"
    //% blockGap=40
    export function resetLights (lights?: number | number[]): void {
        // Default to all lights
        if (lights === undefined) lights = Object.keys(positions).map(Number)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        // Handle a single light case
        if (typeof lights === "number") lights = [lights]

        // Turn off the specified lights
        for (const light of lights) delete board().colorStates[light]
    }

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
    //% advanced=true
    export function getColors (lights: number | number[]): Color[] {
        // Check for null values
        pxtrt.nullCheck(lights)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        // Handle a single light case
        if (typeof lights === "number") lights = [lights]

        // Get colors of the lights
        const colors = lights.map(light => board().colorStates[light] || { red: 0, green: 0, blue: 0 })
        return toRefCollection(colors)
    }

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
    //% advanced=true
    //% blockGap=40
    export function getColor (light: number): Color {
        // Check for null values
        pxtrt.nullCheck(light)

        // Get color of the light
        return board().colorStates[light] || { red: 0, green: 0, blue: 0 }
    }

    /**
     * Get the coordinates of the specified lights
     * @param axis the coordinate axis to get the value of
     * @param lights the lights to get the coordinates of
     */
    //% blockId=lights-get-coordinates
    //% help=lights/get-coordinates weight=15
    //% block="coordinates $axis of lights $lights"
    //% block.loc.sl="koordinate $axis lučk $lights"
    //% jsdoc.loc.sl="Vrni koordinate izbranih lučk"
    //% axis.loc.sl="os, za katero želimo koordinate"
    //% lights.loc.sl="lučke, za katere želimo koordinate"
    //% advanced=true
    export function getCoordinates (axis: Axis, lights: number | number[]): number[] {
        // Check for null values
        pxtrt.nullCheck(axis)
        pxtrt.nullCheck(lights)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        // Handle a single light case
        if (typeof lights === "number") lights = [lights]

        const coordinates = lights.map(light => {
            switch (axis) {
                case Axis.X:
                    return normalizedPositions[light]?.x
                case Axis.Y:
                    return normalizedPositions[light]?.y
                case Axis.Z:
                    return normalizedPositions[light]?.z
            }
        })

        return toRefCollection(coordinates)
    }

    /**
     * Get the coordinate of the specified light
     * @param axis the coordinate axis to get the value of
     * @param light the light to get the coordinate of
     */
    //% blockId=lights-get-coordinate
    //% help=lights/get-coordinate weight=14
    //% block="coordinate $axis of light $light"
    //% block.loc.sl="koordinata $axis lučke $light"
    //% jsdoc.loc.sl="Vrni koordinato izbrane lučke"
    //% axis.loc.sl="os, za katero želimo koordinato"
    //% light.loc.sl="lučka, za katero želimo koordinato"
    //% advanced=true
    //% blockGap=40
    export function getCoordinate (axis: Axis, light: number): number {
        // Check for null values
        pxtrt.nullCheck(axis)
        pxtrt.nullCheck(light)

        switch (axis) {
            case Axis.X:
                return normalizedPositions[light]?.x
            case Axis.Y:
                return normalizedPositions[light]?.y
            case Axis.Z:
                return normalizedPositions[light]?.z
        }
    }

    /**
     * Get a list of lights
     */
    //% blockId=lights-list
    //% help=lights/list-lights weight=45
    //% block="array of lights"
    //% block.loc.sl="vse lučke"
    //% jsdoc.loc.sl="Vrni seznam lučk"
    export function getLights (): number[] {
        return toRefCollection(Object.keys(positions).map(Number))
    }

    /**
     * Get a number of lights
     */
    //% blockId=lights-count
    //% help=lights/count-lights weight=44
    //% block="number of lights"
    //% block.loc.sl="število lučk"
    //% jsdoc.loc.sl="Vrni število lučk"
    export function countLights (): number {
        return Math.max(...Object.keys(positions).map(Number)) + 1
    }

    /**
     * Get a random light
     */
    //% blockId=lights-random
    //% help=lights/random-light weight=43
    //% block="random light"
    //% block.loc.sl="naključna lučka"
    //% jsdoc.loc.sl="Vrni naključno lučko"
    //% blockGap=40
    export function randomLight (): number {
        const lights = Object.keys(positions)
        return Math.floor(Math.random() * lights.length)
    }

    /**
     * Find lights where the specified axis value meets the specified relation
     * @param axis the axis to check
     * @param relation the relation to check
     * @param value the value to compare against
     * @param lights the list of lights to check
     */
    //% blockId=lights-where
    //% help=lights/lights-where weight=35
    //% block="lights where $axis $relation $value || from $lights"
    //% block.loc.sl="lučke kjer je $axis $relation $value || iz $lights"
    //% jsdoc.loc.sl="Najdi lučke, kjer je vrednost osi v določenem razmerju"
    //% axis.loc.sl="os, ki jo želimo preveriti"
    //% relation.loc.sl="razmerje, ki ga želimo preveriti"
    //% value.loc.sl="vrednost, ki jo želimo preveriti"
    //% lights.loc.sl="seznam lučk, ki jih želimo preveriti"
    //% inlineInputMode="inline"
    //% lights.shadow="lights-list"
    export function lightsWhere (axis: Axis, relation: Relation, value: number, lights?: number[]) {
        // Default to all lights
        if (lights === undefined) lights = Object.keys(positions).map(Number)

        // Check for null values
        pxtrt.nullCheck(axis)
        pxtrt.nullCheck(relation)
        pxtrt.nullCheck(value)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        const compare = (first: number, second: number) => {
            switch (relation) {
                case Relation.Greater:
                    return first > second
                case Relation.Less:
                    return first < second
            }
        }

        const result = lights.filter(light => {
            switch (axis) {
                case Axis.X:
                    return compare(normalizedPositions[light]?.x, value)
                case Axis.Y:
                    return compare(normalizedPositions[light]?.y, value)
                case Axis.Z:
                    return compare(normalizedPositions[light]?.z, value)
            }
        })

        return toRefCollection(result)
    }

    /**
     * Get the minimum/maximum value of the specified axis
     * @param axis the axis to get the value of
     * @param bound whether to get the minimum or maximum value
     * @param lights the list of lights to get the value of
     */
    //% blockId=lights-bound
    //% help=lights/lights-bound weight=34
    //% block="$bound value of $axis || from $lights"
    //% block.loc.sl="$bound vrednost $axis || iz $lights"
    //% jsdoc.loc.sl="Vrni najmanjšo ali največjo vrednost osi"
    //% axis.loc.sl="os, za katero želimo vrednost"
    //% bound.loc.sl="ali želimo najmanjšo ali največjo vrednost"
    //% lights.loc.sl="seznam lučk, za katere želimo vrednost"
    //% inlineInputMode="inline"
    //% lights.shadow="lights-list" lights.defl="lights-list"
    //% blockGap=40
    export function lightsBound (axis: Axis, bound: Bound, lights?: number[]): number {
        // Default to all lights
        if (lights === undefined) lights = Object.keys(positions).map(Number)

        // Check for null values
        pxtrt.nullCheck(axis)
        pxtrt.nullCheck(bound)

        // Convert from RefCollection type
        lights = fromRefCollection(lights)

        const values = lights.map(light => {
            switch (axis) {
                case Axis.X:
                    return normalizedPositions[light]?.x
                case Axis.Y:
                    return normalizedPositions[light]?.y
                case Axis.Z:
                    return normalizedPositions[light]?.z
            }
        })

        switch (bound) {
            case Bound.Min:
                return Math.min(...values)
            case Bound.Max:
                return Math.max(...values)
        }
    }
}
