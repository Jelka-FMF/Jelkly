# Razdalja igralne palice

Z blokom **razdalja igralne palice** lahko pridobite razdaljo igralne palice od njenega
središča.

```sig
sensors.joystickDistance()
```

### ~ hint

#### Izdelava interaktivnih vzorcev

Pri razvoju interaktivnih vzorcev prosimo upoštevajte, da ni nujno, da bo kdo vedno
upravljal z vašim vzorcem, ko bo ta aktiven. Vzorci naj bodo zato zasnovani tako, da
bodo smiselno delovali tudi brez interakcije.

### ~

### ~ hint

#### Koordinatni sistem igralne palice

Na spodnji sliki si lahko ogledate, kako je predstavljena razdalja igralne palice.

![Polarni graf](/docs/static/images/polar-graph.svg)

Avtor: [Mets501](https://commons.wikimedia.org/wiki/User:Mets501),
[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0),
[Vir](https://commons.wikimedia.org/wiki/File:Polar_graph_paper.svg)

### ~

## Vrne

* Razdaljo igralne palice od njenega središča, podano kot vrednost med 0 in 1.

## Primeri

Vzorec, ki nastavi svetlost lučk glede na razdaljo igralne palice od njenega središča:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(
        lights.getLights(),
        colors.hsvColor(0, 100, sensors.joystickDistance() * 255)
    )
})
```

## Poglejte tudi

[kot igralne palice](/reference/sensors/joystick-angle)
