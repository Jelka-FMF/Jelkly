# Barva RGB

[Barvni model RGB](https://en.wikipedia.org/wiki/RGB_color_model) je aditivni barvni model,
ki se običajno uporablja za prikaz barv na zaslonih. Vsaka barva se določi z vrednostmi
rdeče (R), zelene (G) in modre (B) komponente med 0 in 255.

S pomočjo tega bloka lahko določite barvo glede na vrednosti rdeče (R), zelene (G)
in modre (B) komponente.

```sig
colors.rgbColor(0, 0, 0)
```

### ~ hint

#### Mešanje barv RGB

Na spodnji sliki si lahko ogledate, kako se v barvnem modelu RGB mešajo osnovne barve.

![Mešanje barv RGB](/docs/static/images/rgb-colors.svg)

Avtor: [Immanuelle](https://commons.wikimedia.org/wiki/User:Immanuelle),
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0),
[Vir](https://commons.wikimedia.org/wiki/File:Venn_diagram_rgb.svg)

### ~

## Parametri

* **red**: Vrednost rdeče komponente med 0 in 255.
* **green**: Vrednost zelene komponente med 0 in 255.
* **blue**: Vrednost modre komponente med 0 in 255.

## Vrne

* Barvo določeno z vrednostmi rdeče, zelene in modre komponente.

## Primeri

Vzorec, ki vse lučke nastavi na roza barvo:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.rgbColor(255, 0, 255))
})
```
