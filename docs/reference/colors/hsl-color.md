# Barva HSL

[Barva HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) je način določanja barv, ki temelji na
cilindričnem koordinatnem sistemu. Sestavljen je iz komponent odtenka (H), nasičenosti (S) in
svetlosti (L).

S pomočjo tega bloka lahko določite barvo glede na njen odtenek (H), nasičenost (S) in svetlost (L).

```sig
colors.hslColor(0, 0, 0)
```

### ~ hint

#### Barvni valj HSL

Na spodnji sliki si lahko ogledate, kako izgleda barvni valj HSL.

Odtenek je določen s kotom okoli glavne osi valja, nasičenost z razdaljo do osi
ter svetlost z višino. Na dnu valja je črna barva, na vrhu pa bela. Najbolj žive
barve so na robu valja v srednji višini.

![Valj HSL](/docs/static/images/hsl-cylinder.png)

Avtor: [SharkD](https://commons.wikimedia.org/wiki/User:SharkD),
[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0),
[Vir](https://commons.wikimedia.org/wiki/File:HSL_color_solid_cylinder.png)

### ~

## Parametri

* **hue**: Vrednost odtenka med 0 in 360.
* **saturation**: Vrednost nasičenosti med 0 in 100.
* **lightness**: Vrednost svetlosti med 0 in 100.

## Vrne

* Barvo, določeno z odtenkom, nasičenostjo in svetlostjo, pretvorjeno v RGB barvni model.

## Primeri

Vzorec, ki vse lučke nastavi na zeleno barvo:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.hslColor(120, 100, 50))
})
```

Vzorec, ki postopoma spreminja odtenek barve:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.hslColor(frameNumber, 100, 50))
})
```
