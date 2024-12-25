# Komponenta HSL

S pomočjo tega bloka lahko iz barve lahko pridobite vrednost komponente odtenka (H),
nasičenosti (S) ali svetlosti (L).

```sig
colors.hslComponent(HslComponent.Hue, colors.rgbColor(255, 0, 255))
```

### ~ hint

#### Barve HSL

Več o barvah HSL si lahko preberete v [dokumentaciji HSL barv](/reference/colors/hsl-color).

### ~

## Parametri

* **component**: Komponenta barve, ki jo želite pridobiti.
* **color**: Barva, iz katere želite pridobiti komponento.

## Vrne

* Vrednost komponente barve.

## Primeri

```block
colors.hslComponent(HslComponent.Hue, colors.rgbColor(255, 0, 255))
```
