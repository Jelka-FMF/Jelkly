/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../libs/core/types.d.ts"/>

// Check how official and other simulators are implemented:
// https://github.com/microsoft/pxt-microbit
// https://github.com/microsoft/pxt-sample
// https://github.com/microsoft/pxt-adafruit
// https://github.com/microsoft/pxt-brainpad
// https://github.com/letssteam/pxt-lets-steam
// https://github.com/matthewtebbs-too/pxt-impetus
// https://github.com/Buildbee/makecode

const DEFAULT_FRAME_RATE = 50

const enum SimulationMode {
    "2D",
    "3D",
}

let simulationMode = SimulationMode["3D"] as SimulationMode

const mode2dButton = document.getElementById("simulation-mode-2d")
const mode3dButton = document.getElementById("simulation-mode-3d")

if (simulationMode === SimulationMode["2D"]) mode2dButton.classList.add("active")
if (simulationMode === SimulationMode["3D"]) mode3dButton.classList.add("active")

mode2dButton.addEventListener("click", () => {
    simulationMode = SimulationMode["2D"]
    mode2dButton.classList.add("active")
    mode3dButton.classList.remove("active")
    pxsim.board().updateView()
})

mode3dButton.addEventListener("click", () => {
    simulationMode = SimulationMode["3D"]
    mode3dButton.classList.add("active")
    mode2dButton.classList.remove("active")
    pxsim.board().updateView()
})

const canvas = document.getElementById("simulation-canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")

window.addEventListener("resize", () => {
    pxsim.board().updateView()
}, true)

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
        public frameRate: number = DEFAULT_FRAME_RATE
        public colorStates: { [index: number]: Color } = {}
        public joystickState: JoystickState

        constructor () {
            super()
        }

        initAsync (msg: pxsim.SimulatorRunMessage): Promise<void> {
            // Reset the board state
            this.frameRate = DEFAULT_FRAME_RATE
            this.colorStates = {}
            this.joystickState = new JoystickState()

            // Draw the initial view
            this.updateView()

            return Promise.resolve()
        }

        screenshotAsync (width?: number): Promise<ImageData> {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            return Promise.resolve(imageData)
        }

        updateView () {
            switch (simulationMode) {
                case SimulationMode["2D"]:
                    renderView2D()
                    break
                case SimulationMode["3D"]:
                    renderView3D()
                    break
            }
        }
    }
}
