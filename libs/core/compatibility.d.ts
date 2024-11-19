// @ts-ignore: Needed to make Python transpiling work
declare const enum NumberFormat {
    Int8LE = 1,
    UInt8LE = 2,
    Int16LE = 3,
    UInt16LE = 4,
    Int32LE = 5,
    UInt32LE = 11,

    Int8BE = 6,
    UInt8BE = 7,
    Int16BE = 8,
    UInt16BE = 9,
    Int32BE = 10,
    UInt32BE = 12,

    Float32LE = 13,
    Float64LE = 14,

    Float32BE = 15,
    Float64BE = 16,
}

// @ts-ignore: Needed to make Python transpiling work
declare interface Buffer {
    /**
     * Return false when the buffer can be written to
     */
    //% shim=BufferMethods::isReadOnly
    isReadOnly (): boolean;

    /**
     * Return the length of the buffer object
     */
    //% property shim=BufferMethods::length
    length: int32;

    /**
     * Read an unsigned byte at a particular location
     */
    //% shim=BufferMethods::getUint8
    getUint8 (off: int32): int32;

    /**
     * Write an unsigned byte at a particular location
     */
    //% shim=BufferMethods::setUint8
    setUint8 (off: int32, v: int32): void;

    /**
     * Read a number in a specified format from the buffer
     */
    //% shim=BufferMethods::getNumber
    getNumber (format: NumberFormat, offset: int32): number;

    /**
     * Write a number in a specified format in the buffer
     */
    //% shim=BufferMethods::setNumber
    setNumber (format: NumberFormat, offset: int32, value: number): void;

    /**
     * Fill (a fragment) of the buffer with the given value
     */
    //% offset.defl=0 length.defl=-1 shim=BufferMethods::fill
    fill (value: int32, offset?: int32, length?: int32): void;

    /**
     * Write contents of `src` at `dstOffset` in the current buffer
     */
    //% shim=BufferMethods::write
    write (dstOffset: int32, src: Buffer): void;

    /**
     * Return a copy of a fragment of a buffer
     */
    //% offset.defl=0 length.defl=-1 shim=BufferMethods::slice
    slice (offset?: int32, length?: int32): Buffer;

    /**
     * Shift buffer left in place, with zero padding
     *
     * @param offset number of bytes to shift; use negative value to shift right
     * @param start start offset in buffer; default is 0
     * @param length number of elements in buffer; if negative, the length is set as the buffer length minus start, e.g. -1
     */
    //% start.defl=0 length.defl=-1 shim=BufferMethods::shift
    shift (offset: int32, start?: int32, length?: int32): void;

    /**
     * Rotate buffer left in place
     *
     * @param offset number of bytes to shift; use negative value to shift right
     * @param start start offset in buffer; default is 0
     * @param length number of elements in buffer; if negative, the length is set as the buffer length minus start, e.g. -1
     */
    //% start.defl=0 length.defl=-1 shim=BufferMethods::rotate
    rotate (offset: int32, start?: int32, length?: int32): void;

    /**
     * Convert a buffer to string assuming UTF8 encoding
     */
    //% shim=BufferMethods::toString
    toString (): string;

    /**
     * Convert a buffer to its hexadecimal representation
     */
    //% shim=BufferMethods::toHex
    toHex (): string;

    /**
     * Compute k-bit FNV-1 non-cryptographic hash of the buffer
     */
    //% shim=BufferMethods::hash
    hash (bits: int32): uint32;
}
