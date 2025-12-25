# Kot igralne palice

Z blokom **kot igralne palice** lahko pridobite kot igralne palice.

```sig
sensors.joystickAngle()
```

### ~ hint

#### Izdelava interaktivnih vzorcev

Pri razvoju interaktivnih vzorcev prosimo upoštevajte, da ni nujno, da bo kdo vedno
upravljal z vašim vzorcem, ko bo ta aktiven. Vzorci naj bodo zato zasnovani tako, da
bodo smiselno delovali tudi brez interakcije.

### ~

### ~ hint

#### Koordinatni sistem igralne palice

Na spodnji sliki si lahko ogledate, kako so predstavljeni koti igralne palice.

![Polarni graf](/docs/static/images/polar-graph.svg)

Avtor: [Mets501](https://commons.wikimedia.org/wiki/User:Mets501),
[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0),
[Vir](https://commons.wikimedia.org/wiki/File:Polar_graph_paper.svg)

### ~

## Vrne

* Kot igralne palice glede na pozitivni poltrak `x` osi, merjen v stopinjah med 0 in 360.

## Primeri

Vzorec, ki nastavi barvo lučk glede na kot igralne palice:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(
        lights.getLights(),
        colors.hsvColor(sensors.joystickAngle(), 100, 255)
    )
})
```

## Poglejte tudi

[razdalja igralne palice](/reference/sensors/joystick-distance)
