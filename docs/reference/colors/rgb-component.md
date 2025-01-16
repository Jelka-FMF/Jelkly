# Komponenta RGB

S pomočjo tega bloka lahko iz barve lahko pridobite vrednost rdeče (R), zelene (G)
ali modre (B) komponente.

```sig
colors.rgbComponent(RgbComponent.Red, colors.rgbColor(255, 0, 255))
```

### ~ hint

#### Barve RGB

Več o barvah RGB si lahko preberete v [dokumentaciji RGB barv](/reference/colors/rgb-color).

### ~

## Parametri

* **component**: Komponenta barve, ki jo želite pridobiti.
* **color**: Barva, iz katere želite pridobiti komponento.

## Vrne

* Vrednost komponente barve.

## Primeri

```block
colors.rgbComponent(RgbComponent.Red, colors.rgbColor(255, 0, 255))
```
