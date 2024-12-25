# Komponenta CMYK

S pomočjo tega bloka lahko iz barve lahko pridobite vrednost cian (C), magenta (M),
rumene (Y) ali črne (K) komponente.

```sig
colors.cmykComponent(CmykComponent.Cyan, colors.rgbColor(255, 0, 255))
```

### ~ hint

#### Barve CMYK

Več o barvah CMYK si lahko preberete v [dokumentaciji CMYK barv](/reference/colors/cmyk-color).

### ~

## Parametri

* **component**: Komponenta barve, ki jo želite pridobiti.
* **color**: Barva, iz katere želite pridobiti komponento.

## Vrne

* Vrednost komponente barve.

## Primeri

```block
colors.cmykComponent(CmykComponent.Cyan, colors.rgbColor(255, 0, 255))
```
