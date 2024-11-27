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
     * Turn off all lights
     */
    //% blockId=lights-reset
    //% help=lights/reset-lights weight=54
    //% block="reset lights"
    //% block.loc.sl="ponastavi lučke"
    //% blockGap=40
    export function resetLights (): void {
        board().colorStates = {}
    }

    /**
     * Get the colors of the specified lights
     * @param lights the lights to get the colors of
     */
    //% blockId=lights-get-colors
    //% help=lights/get-colors weight=25
    //% block="colors of lights $lights"
    //% block.loc.sl="barve lučk $lights"
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
     * @param lights the lights to get the coordinate of
     */
    //% blockId=lights-get-coordinates
    //% help=lights/get-coordinates weight=15
    //% block="coordinates $axis of lights $lights"
    //% block.loc.sl="koordinate $axis lučk $lights"
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
                    return positions[light]?.x
                case Axis.Y:
                    return positions[light]?.y
                case Axis.Z:
                    return positions[light]?.z
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
    //% blockGap=40
    export function getCoordinate (axis: Axis, light: number): number {
        // Check for null values
        pxtrt.nullCheck(axis)
        pxtrt.nullCheck(light)

        switch (axis) {
            case Axis.X:
                return positions[light]?.x
            case Axis.Y:
                return positions[light]?.y
            case Axis.Z:
                return positions[light]?.z
        }
    }

    /**
     * Get a list of lights
     */
    //% blockId=lights-list
    //% help=lights/list-lights weight=45
    //% block="array of lights"
    //% block.loc.sl="seznam lučk"
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
    export function countLights (): number {
        return Object.keys(positions).length
    }

    /**
     * Get a random light
     */
    //% blockId=lights-random
    //% help=lights/random-light weight=43
    //% block="random light"
    //% block.loc.sl="naključna lučka"
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
    //% block="lights where $axis $relation $value from $lights"
    //% block.loc.sl="lučke kjer je $axis $relation $value iz $lights"
    //% inlineInputMode="inline"
    //% lights.shadow="lights-list" lights.defl="lights-list"
    //% blockGap=40
    export function lightsWhere (axis: Axis, relation: Relation, value: number, lights: number[]) {
        // Check for null values
        pxtrt.nullCheck(axis)
        pxtrt.nullCheck(relation)
        pxtrt.nullCheck(value)
        pxtrt.nullCheck(lights)

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
                    return compare(positions[light]?.x, value)
                case Axis.Y:
                    return compare(positions[light]?.y, value)
                case Axis.Z:
                    return compare(positions[light]?.z, value)
            }
        })

        return toRefCollection(result)
    }
}
