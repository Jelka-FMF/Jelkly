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
     * Turn off all lights
     */
    //% blockId=lights-reset
    //% help=lights/reset-lights weight=54
    //% block="reset lights"
    //% block.loc.sl="ponastavi lučke"
    //% jsdoc.loc.sl="Izklopi vse lučke"
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
    //% jsdoc.loc.sl="Vrni barve izbranih lučk"
    //% lights.loc.sl="lučke, za katere želimo barve"
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
    //% blockGap=40
    export function getColor (light: number): Color {
        // Check for null values
        pxtrt.nullCheck(light)

        // Get color of the light
        return board().colorStates[light] || { red: 0, green: 0, blue: 0 }
    }


    /**
     * Get a list of lights
     */
    //% blockId=lights-list
    //% help=lights/list-lights weight=45
    //% block="array of lights"
    //% block.loc.sl="vse  lučke"
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
        return Object.keys(positions).length
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
                    return compare(normalizedPositions[light]?.x, value)
                case Axis.Y:
                    return compare(normalizedPositions[light]?.y, value)
                case Axis.Z:
                    return compare(normalizedPositions[light]?.z, value)
            }
        })

        return toRefCollection(result)
    }
}
