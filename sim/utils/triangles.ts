function findFixedOffset (positions: Position[], offsetX: number, offsetZ: number) {
    // Calculate center of the positions
    let sumX = 0
    let sumZ = 0
    for (const light of positions) {
        sumX += light.x
        sumZ += light.z
    }
    const centerX = sumX / positions.length

    // Mirror over the symmetrical axis and find the smallest y coordinate
    // We use this as the bottom left corner of the tree triangle
    const lefty = Math.min(...positions.map(light => centerX - Math.abs(centerX - light.x))) - offsetX
    const leftz = Math.min(...positions.map(light => light.x)) - offsetZ

    // Find the largest coefficient of the line
    const largestCoefficient = Math.max(...positions.map(light => (light.x - lefty) / (light.z - leftz)))

    return {
        x: centerX, // Approximate symmetry axis
        z: largestCoefficient * centerX, // Triangle top
        lx: lefty, // Left corner of the triangle
        lz: leftz, // Left corner of the triangle
    }
}

function findOrigin (positions: Position[], maxOffsetX: number, maxOffsetZ: number) {
    // Generate possible shifts
    const offsetsX = Array.from(Array(10000).keys()).map(i => maxOffsetX / (i + 1))
    const offsetsZ = Array.from(Array(1).keys()).map(i => maxOffsetZ / (i + 1))

    const possibleOffsets = []
    for (const zamikx of offsetsX) {
        for (const zamikz of offsetsZ) {
            possibleOffsets.push({ x: zamikx, z: zamikz }) // Origins
        }
    }
    const lowestArea = Math.min(...possibleOffsets.map(zamik => findFixedOffset(positions, zamik.x, zamik.z).x * findFixedOffset(positions, zamik.x, zamik.z).z))
    // console.debug("Triangle area", lowestArea)

    // Return the origin with the smallest area
    const offsets = possibleOffsets.find(zamik => findFixedOffset(positions, zamik.x, zamik.z).x * findFixedOffset(positions, zamik.x, zamik.z).z === lowestArea)
    return findFixedOffset(positions, offsets.x, offsets.z)
}
