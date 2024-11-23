declare const enum Axis {
    //% block="x"
    X,
    //% block="y"
    Y,
    //% block="z"
    Z,
}

declare const enum RgbComponent {
    //% block="red"
    //% block.loc.sl="rdeča"
    Red,
    //% block="green"
    //% block.loc.sl="zelena"
    Green,
    //% block="blue"
    //% block.loc.sl="modra"
    Blue,
}

declare const enum HslComponent {
    //% block="hue"
    //% block.loc.sl="odtenek"
    Hue,
    //% block="saturation"
    //% block.loc.sl="nasičenost"
    Saturation,
    //% block="lightness"
    //% block.loc.sl="svetlost"
    Lightness,
}

declare const enum HsvComponent {
    //% block="hue"
    //% block.loc.sl="odtenek"
    Hue,
    //% block="saturation"
    //% block.loc.sl="nasičenost"
    Saturation,
    //% block="value"
    //% block.loc.sl="vrednost"
    Value,
}

declare const enum CmykComponent {
    //% block="cyan"
    //% block.loc.sl="cian"
    Cyan,
    //% block="magenta"
    //% block.loc.sl="magenta"
    Magenta,
    //% block="yellow"
    //% block.loc.sl="rumena"
    Yellow,
    //% block="black"
    //% block.loc.sl="črna"
    Key,
}

declare interface Position {
    x: number;
    y: number;
    z: number;
}

declare interface Color {
    red: number;
    green: number;
    blue: number;
}
