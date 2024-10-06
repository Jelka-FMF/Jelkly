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
        public testStateNum: number
        public testStateStr: string

        constructor () {
            super()
            this.testElement = document.getElementById("test-element")
            // TODO: Configure properties here
        }

        initAsync (msg: pxsim.SimulatorRunMessage): Promise<void> {
            // TODO: Initialize here

            return Promise.resolve()
        }

        updateView () {
            // TODO: Update stuff here

            this.testElement.innerText = `${this.testStateNum} + ${this.testStateStr}`
        }
    }
}
