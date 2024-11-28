/**
 * Normalizes the positions of the lights.
 *
 * The origin (0, 0, 0) is the center of the ball.
 * The scale parameter is the radius of the ball.
 *
 * @param positions The positions to normalize
 * @param scale The radius of the ball
 *
 * @returns The normalized positions
 */
function normalizePositions (positions: { [index: number]: Position }, scale: number = 100) {
    // Max distance from the origin (0, 0, 0) to any light
    const maxRadius = Math.max(...Object.values(positions).map(pos => Math.sqrt(pos.x ** 2 + pos.y ** 2 + pos.z ** 2)))

    // Scale the positions based on the max radius and parameter
    const normalizedPositions: { [index: number]: Position } = {}
    for (const index in positions) {
        normalizedPositions[index] = {
            x: positions[index].x / maxRadius * scale,
            y: positions[index].y / maxRadius * scale,
            z: positions[index].z / maxRadius * scale
        }
    }
    return normalizedPositions
}

const normalizedPositions = normalizePositions(positions)
