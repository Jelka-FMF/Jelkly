function findFixedOffset (positions: Position[], offsetY: number, offsetZ: number) {
    // Calculate center of the positions
    let sumY = 0
    let sumZ = 0
    for (const light of positions) {
        sumY += light.y
        sumZ += light.z
    }
    const centerY = sumY / positions.length

    // Mirror over the symmetrical axis and find the smallest y coordinate
    // We use this as the bottom left corner of the tree triangle
    const lefty = Math.min(...positions.map(pos => centerY - Math.abs(centerY - pos.y))) - offsetY
    const leftz = Math.min(...positions.map(light => light.y)) - offsetZ

    // Find the largest coefficient of the line
    const largestCoefficient = Math.max(...positions.map(pos => (pos.y - lefty) / (pos.z - leftz)))

    return {
        y: centerY, // Approximate symmetry axis
        z: largestCoefficient * centerY, // Triangle top
        ly: lefty, // Left corner of the triangle
        lz: leftz, // Left corner of the triangle
    }
}

function findOrigin (positions: Position[], maxOffsetY: number, maxOffsetZ: number) {
    // Generate possible shifts
    const offsetsY = Array.from(Array(100).keys()).map(i => maxOffsetY / (i + 1))
    const offsetsZ = Array.from(Array(100).keys()).map(i => maxOffsetZ / (i + 1))

    const possibleOffsets = []
    for (const zamiky of offsetsY) {
        for (const zamikz of offsetsZ) {
            possibleOffsets.push({ y: zamiky, z: zamikz }) // Origins
        }
    }
    const lowestArea = Math.min(...possibleOffsets.map(zamik => findFixedOffset(positions, zamik.y, zamik.z).y * findFixedOffset(positions, zamik.y, zamik.z).z))
    // console.debug("Triangle area", lowestArea)

    // Return the origin with the smallest area
    const offsets = possibleOffsets.find(zamik => findFixedOffset(positions, zamik.y, zamik.z).y * findFixedOffset(positions, zamik.y, zamik.z).z === lowestArea)
    return findFixedOffset(positions, offsets.y, offsets.z)
}
