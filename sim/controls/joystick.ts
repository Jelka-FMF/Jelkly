// But I wonder if I myself shall ever find joy. Ooooh, so edgy.
const joystick = document.getElementById('joystick')
const joystickKnob = document.getElementById('joystick-knob')

class JoystickState {
    dragging: boolean = false

    distance: number = 0
    angle: number = 0
}

/**
 * Update the joystick state.
 *
 * @param distance The normalized distance
 * @param angle - The angle in degrees
 */
function setJoystickState (distance: number, angle: number) {
    const state = pxsim.board().joystickState
    state.distance = distance
    state.angle = angle
}

/**
 * Update the joystick knob position based on pointer coordinates.
 */
function updateKnobPosition (x: number, y: number) {
    const rect = joystick.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const maxRadius = rect.width / 2 - 20 // Account for the knob size

    // Calculate relative position
    const relX = x - rect.left - centerX
    const relY = y - rect.top - centerY
    const distance = Math.sqrt(relX * relX + relY * relY)
    const angle = Math.atan2(relY, relX)

    // Constrain to circle
    const constrainedDistance = Math.min(distance, maxRadius)
    const finalX = Math.cos(angle) * constrainedDistance
    const finalY = Math.sin(angle) * constrainedDistance

    // Update knob position
    joystickKnob.style.transform = `translate(calc(-50% + ${finalX}px), calc(-50% + ${finalY}px))`

    // Convert angle to degrees [0, 360), where 0 is on the right, in the positive direction
    const degrees = (Math.atan2(-relY, relX) * 180 / Math.PI + 360) % 360

    // Send the joystick state
    setJoystickState(constrainedDistance / maxRadius, degrees)
}

/**
 * Reset the joystick knob to the center position.
 */
function resetKnobPosition () {
    // Mark knob as inactive
    joystickKnob.classList.remove('active')

    // Reset knob to center
    joystickKnob.style.transform = 'translate(-50%, -50%)'

    // Send the reset joystick state
    setJoystickState(0, 0)
}

function handleJoystickStart (event: PointerEvent) {
    // Mark joystick as dragging
    pxsim.board().joystickState.dragging = true

    // Capture pointer events outside the element
    joystick.setPointerCapture(event.pointerId)
    event.preventDefault()

    // Register update handlers
    document.addEventListener('pointermove', handleJoystickMove)
    document.addEventListener('pointerup', handleJoystickEnd)
    document.addEventListener('pointercancel', handleJoystickEnd)

    // Mark knob as active
    joystickKnob.classList.add('active')

    // Set the initial position
    updateKnobPosition(event.clientX, event.clientY)
}

function handleJoystickMove (event: PointerEvent) {
    if (!pxsim.board().joystickState.dragging) return

    // Prevent default behavior
    event.preventDefault()

    // Update the knob position
    updateKnobPosition(event.clientX, event.clientY)
}

function handleJoystickEnd (event: PointerEvent) {
    // Mark joystick as not dragging
    pxsim.board().joystickState.dragging = false

    // Release pointer capture
    joystick.releasePointerCapture(event.pointerId)
    event.preventDefault()

    // Unregister update handlers
    document.removeEventListener('pointermove', handleJoystickMove)
    document.removeEventListener('pointerup', handleJoystickEnd)
    document.removeEventListener('pointercancel', handleJoystickEnd)

    // Reset knob position
    resetKnobPosition()
}

joystick.addEventListener('pointerdown', handleJoystickStart)
