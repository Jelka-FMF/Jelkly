# Barva RGB

[Barvni model CMYK](https://en.wikipedia.org/wiki/CMYK_color_model) je subtraktivni barvni model,
ki se običajno uporablja za tiskanje. Vsaka barva se določi z vrednostmi cian (C), magenta (M),
rumena (Y) in črne (K) komponente med 0 in 100.

S pomočjo tega bloka lahko določite barvo glede na vrednosti cian (C), magenta (M), rumene (Y)
in črne (K) komponente.

```sig
colors.cmykColor(0, 0, 0)
```

### ~ hint

#### Mešanje barv CMYK

Na spodnji sliki si lahko ogledate, kako se v barvnem modelu CMYK mešajo osnovne barve.

![Mešanje barv CMYK](/docs/static/images/cmyk-colors.svg)

Avtor: [Youssef Abdelhamed](https://commons.wikimedia.org/wiki/User:Hemidah),
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0),
[Vir](https://commons.wikimedia.org/wiki/File:CMYK_color_model.svg)

### ~

## Parametri

* **cian**: Vrednost cian komponente med 0 in 100.
* **magenta**: Vrednost magenta komponente med 0 in 100.
* **yellow**: Vrednost rumene komponente med 0 in 100.
* **black**: Vrednost črne komponente med 0 in 100.

## Vrne

* Barvo določeno z vrednostmi cian, magenta, rumene in črne komponente, pretvorjeno v RGB barvni model.

## Primeri

Vzorec, ki vse lučke nastavi na rumeno barvo:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.cmykColor(0, 0, 100, 0))
})
```
