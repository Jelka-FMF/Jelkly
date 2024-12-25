# Barva HSV

[Barva HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) je način določanja barv, ki temelji na
cilindričnem koordinatnem sistemu. Sestavljen je iz komponent odtenka (H), nasičenosti (S) in
vrednosti (V).

S pomočjo tega bloka lahko določite barvo glede na njen odtenek (H), nasičenost (S) in vrednost (V).

```sig
colors.hsvColor(0, 0, 0)
```

### ~ hint

#### Barvni valj HSV

Na spodnji sliki si lahko ogledate, kako izgleda barvni valj HSV.

Odtenek je določen s kotom okoli glavne osi valja, nasičenost z razdaljo do osi
ter vrednost z višino. Na dnu valja je črna barva. Najbolj žive barve so na robu
valja na vrhu.

![Valj HSV](/docs/static/images/hsv-cylinder.png)

Avtor: [SharkD](https://commons.wikimedia.org/wiki/User:SharkD),
[CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0),
[Vir](https://commons.wikimedia.org/wiki/File:HSV_color_solid_cylinder.png)

### ~

## Parametri

* **hue**: Vrednost odtenka med 0 in 360.
* **saturation**: Vrednost nasičenosti med 0 in 100.
* **value**: Vrednost vrednosti med 0 in 100.

## Vrne

* Barvo, določeno z odtenkom, nasičenostjo in vrednostjo, pretvorjeno v RGB barvni model.

## Primeri

Vzorec, ki vse lučke nastavi na rdečo barvo:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.hsvColor(0, 100, 100))
})
```

Vzorec, ki postopoma spreminja odtenek barve:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.hsvColor(frameNumber, 100, 100))
})
```
