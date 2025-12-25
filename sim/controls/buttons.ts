class ButtonsState {
    [key: number]: number

    constructor () {
        this[Button.ArrowUp] = 0
        this[Button.ArrowDown] = 0
        this[Button.ArrowLeft] = 0
        this[Button.ArrowRight] = 0
        this[Button.LetterA] = 0
        this[Button.LetterB] = 0
        this[Button.LetterC] = 0
        this[Button.LetterD] = 0
    }
}

const buttonElements = {
    [Button.ArrowUp]: document.getElementById("button-arrow-up"),
    [Button.ArrowDown]: document.getElementById("button-arrow-down"),
    [Button.ArrowLeft]: document.getElementById("button-arrow-left"),
    [Button.ArrowRight]: document.getElementById("button-arrow-right"),
    [Button.LetterA]: document.getElementById("button-letter-a"),
    [Button.LetterB]: document.getElementById("button-letter-b"),
    [Button.LetterC]: document.getElementById("button-letter-c"),
    [Button.LetterD]: document.getElementById("button-letter-d"),
}

const keyButtons: { [key: string]: Button } = {
    "arrowup": Button.ArrowUp,
    "arrowdown": Button.ArrowDown,
    "arrowleft": Button.ArrowLeft,
    "arrowright": Button.ArrowRight,
    "a": Button.LetterA,
    "b": Button.LetterB,
    "c": Button.LetterC,
    "d": Button.LetterD,
}

const enum InputSource {
    Pointer = 1 << 0,
    Keyboard = 1 << 1,
    Enter = 1 << 2,
}

/**
 * Set or clear an input source for a button.
 */
function setButtonInput (button: Button, source: InputSource, active: boolean) {
    const state = pxsim.board().buttonsState

    // Update the stored state
    if (active) state[button] |= source
    else state[button] &= ~source

    // Update the visual state
    const element = buttonElements[button]
    element.classList.toggle("active", state[button] > 0)
}

/**
 * Handle the keyboard button when a pointer event starts.
 */
function handleButtonPointerDown (event: PointerEvent, button: Button) {
    const target = event.target as HTMLElement

    // Capture pointer events outside the element
    target.setPointerCapture(event.pointerId)
    event.preventDefault()

    // Update the button state
    setButtonInput(button, InputSource.Pointer, true)
}

/**
 * Handle the keyboard button when a pointer event ends.
 */
function handleButtonPointerUp (event: PointerEvent, button: Button) {
    const target = event.target as HTMLElement

    // Release pointer capture
    target.releasePointerCapture(event.pointerId)
    event.preventDefault()

    // Update the button state
    setButtonInput(button, InputSource.Pointer, false)
}

Object.entries(buttonElements).forEach(([button, element]) => {
    const buttonEnum = parseInt(button) as Button

    // Configure pointer events
    element.addEventListener("pointerdown", (event) => handleButtonPointerDown(event, buttonEnum))
    element.addEventListener("pointerup", (event) => handleButtonPointerUp(event, buttonEnum))
    element.addEventListener("pointercancel", (event) => handleButtonPointerUp(event, buttonEnum))

    // Configure events for the Enter key
    element.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.repeat) {
            event.preventDefault()
            setButtonInput(buttonEnum, InputSource.Enter, true)
        }
    })
    element.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            setButtonInput(buttonEnum, InputSource.Enter, false)
        }
    })

    // Release the Enter key when the button loses focus
    element.addEventListener("blur", () => {
        setButtonInput(buttonEnum, InputSource.Enter, false)
    })
})

// Configure global keyboard events
document.addEventListener("keydown", (event) => {
    const button = keyButtons[event.key.toLowerCase()]
    if (button !== undefined && !event.repeat) {
        event.preventDefault()
        setButtonInput(button, InputSource.Keyboard, true)
    }
})
document.addEventListener("keyup", (event) => {
    const button = keyButtons[event.key.toLowerCase()]
    if (button !== undefined) {
        event.preventDefault()
        setButtonInput(button, InputSource.Keyboard, false)
    }
})
