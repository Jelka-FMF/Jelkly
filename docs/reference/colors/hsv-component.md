# Komponenta HSV

S pomočjo tega bloka lahko iz barve lahko pridobite vrednost komponente odtenka (H),
nasičenosti (S) ali vrednosti (V).

```sig
colors.hsvComponent(HsvComponent.Hue, colors.rgbColor(255, 0, 255))
```

### ~ hint

#### Barve HSV

Več o barvah HSV si lahko preberete v [dokumentaciji HSV barv](/reference/colors/hsv-color).

### ~

## Parametri

* **component**: Komponenta barve, ki jo želite pridobiti.
* **color**: Barva, iz katere želite pridobiti komponento.

## Vrne

* Vrednost komponente barve.

## Primeri

```block
colors.hsvComponent(HsvComponent.Hue, colors.rgbColor(255, 0, 255))
```
