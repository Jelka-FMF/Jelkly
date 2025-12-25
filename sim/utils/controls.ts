const joystickColumn = document.getElementById("joystick-column")
const arrowButtonsColumn = document.getElementById("arrow-buttons-column")
const letterButtonsColumn = document.getElementById("letter-buttons-column")

function renderControls () {
    const parts = pxsim.board().parts

    const joystickUsed = parts.includes("joystick")
    const buttonsUsed = parts.includes("buttons")

    // Show or hide joystick
    joystickColumn.classList.toggle("hidden", !joystickUsed)

    // Show or hide buttons
    arrowButtonsColumn.classList.toggle("hidden", !buttonsUsed)
    letterButtonsColumn.classList.toggle("hidden", !buttonsUsed)
}
