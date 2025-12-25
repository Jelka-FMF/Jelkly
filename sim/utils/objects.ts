/**
 * Converts an array of items into `RefCollection`.
 *
 * Note: The return type of this function is actually `RefCollection<T>`,
 * but we need to define it as `T[]` so the code typechecks.
 */
function toRefCollection<T>(items: T[]): T[] {
    const collection = new pxsim.RefCollection()

    // @ts-ignore: Accessing an internal property
    collection.data = items

    // @ts-ignore: Different type during runtime
    return collection
}

/**
 * Converts a `RefCollection` into an array of items.
 *
 * Note: The parameter of this function may be `RefCollection<T>`,
 * but we need to define it as `T` so the code typechecks.
 */
function fromRefCollection<T>(collection: T): T {
    // @ts-ignore: Different type during runtime
    if (collection?.hasOwnProperty("data")) return collection.data
    else return collection
}
