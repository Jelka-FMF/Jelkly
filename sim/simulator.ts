/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    /**
     * This function gets called each time the program restarts.
     */
    initCurrentRuntime = () => {
        runtime.board = new Board()
    }

    /**
     * Gets the current board (program state).
     */
    export function board (): Board {
        return runtime.board as Board
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard {
        // TODO: Declare properties here
        public testElement: HTMLSpanElement
        public colorElement: HTMLSpanElement

        public testStateNum: number
        public colorState: { red: number, green: number, blue: number }
        public red: number
        public green: number
        public blue: number

        // FIXME: This does not currently even work...
        // Check how official and other simulators are implemented:
        // https://github.com/microsoft/pxt-microbit
        // https://github.com/microsoft/pxt-sample
        // https://github.com/microsoft/pxt-adafruit
        // https://github.com/microsoft/pxt-brainpad
        // https://github.com/letssteam/pxt-lets-steam
        // https://github.com/matthewtebbs-too/pxt-impetus
        // https://github.com/Buildbee/makecode

        constructor () {
            super()
            this.testElement = document.getElementById("test-element")
            this.colorElement = document.getElementById("color-element")
            // TODO: Configure properties here
        }

        initAsync (msg: pxsim.SimulatorRunMessage): Promise<void> {
            // TODO: Initialize here

            return Promise.resolve()
        }

        updateView () {
            // TODO: Update stuff here

            this.testElement.innerText = `${this.testStateNum} + ${this.colorState}`
            this.colorElement.innerText = `${this.red} + ${this.green} + ${this.blue}` 
        }
    }
}
