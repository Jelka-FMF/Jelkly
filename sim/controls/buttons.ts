class ButtonsState {
    [key: number]: boolean

    constructor () {
        this[Button.ArrowUp] = false
        this[Button.ArrowDown] = false
        this[Button.ArrowLeft] = false
        this[Button.ArrowRight] = false
        this[Button.LetterA] = false
        this[Button.LetterB] = false
        this[Button.LetterC] = false
        this[Button.LetterD] = false
    }
}

const keyboardArrowButtons = {
    [Button.ArrowUp]: document.getElementById("button-arrow-up"),
    [Button.ArrowDown]: document.getElementById("button-arrow-down"),
    [Button.ArrowLeft]: document.getElementById("button-arrow-left"),
    [Button.ArrowRight]: document.getElementById("button-arrow-right"),
}

const keyboardLetterButtons = {
    [Button.LetterA]: document.getElementById("button-letter-a"),
    [Button.LetterB]: document.getElementById("button-letter-b"),
    [Button.LetterC]: document.getElementById("button-letter-c"),
    [Button.LetterD]: document.getElementById("button-letter-d"),
}

const keyboardButtons = { ...keyboardArrowButtons, ...keyboardLetterButtons }

/**
 * Handle the keyboard button when a pointer event starts.
 */
function handleButtonPointerDown (event: PointerEvent, button: Button) {
    const target = event.target as HTMLElement

    // Capture pointer events outside the element
    target.setPointerCapture(event.pointerId)
    event.preventDefault()

    // Update the button state
    const state = pxsim.board().buttonsState
    state[button] = true
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
    const state = pxsim.board().buttonsState
    state[button] = false
}

Object.entries(keyboardButtons).forEach(([button, element]) => {
    const buttonEnum = parseInt(button) as Button
    element.addEventListener("pointerdown", (event) => handleButtonPointerDown(event, buttonEnum))
    element.addEventListener("pointerup", (event) => handleButtonPointerUp(event, buttonEnum))
    element.addEventListener("pointercancel", (event) => handleButtonPointerUp(event, buttonEnum))
})
