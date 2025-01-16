# Barve

## Naključna barva

Z blokom [naključna barva](/reference/colors/random-color) lahko ustvarite naključno barvo.

```block
colors.randomColor()
```

## Podajanje barve

### Barva RGB

Z blokom [RGB](/reference/colors/rgb-color) lahko določite barvo glede na vrednosti
rdeče (R), zelene (G) in modre (B) komponente.

```block
colors.rgbColor(255, 0, 255)
```

### Barva HSL

Z blokom [HSL](/reference/colors/hsl-color) lahko določite barvo glede na njen
odtenek (H), nasičenost (S) in svetlost (L).

```block
colors.hslColor(0, 100, 50)
```

### Barva HSV

Z blokom [HSV](/reference/colors/hsv-color) lahko določite barvo glede na njen
odtenek (H), nasičenost (S) in vrednost (V).

```block
colors.hsvColor(0, 100, 100)
```

### Barva CMYK

Z blokom [CMYK](/reference/colors/cmyk-color) lahko določite barvo glede na vrednosti
cian (C), magenta (M), rumene (Y) in črne (K) komponente.

```block
colors.cmykColor(0, 100, 100, 0)
```

## Komponente barve

### Komponenta RGB

Z blokom [komponenta RGB](/reference/colors/rgb-component) lahko pridobite vrednost
rdeče (R), zelene (G) ali modre (B) komponente iz barve.

```block
colors.rgbComponent(RgbComponent.Red, colors.rgbColor(255, 0, 255))
```

### Komponenta HSL

Z blokom [komponenta HSL](/reference/colors/hsl-component) lahko pridobite vrednost
komponente odtenka (H), nasičenosti (S) ali svetlosti (L) iz barve.

```block
colors.hslComponent(HslComponent.Hue, colors.rgbColor(255, 0, 255))
```

### Komponenta HSV

Z blokom [komponenta HSV](/reference/colors/hsv-component) lahko pridobite vrednost
komponente odtenka (H), nasičenosti (S) ali vrednosti (V) iz barve.

```block
colors.hsvComponent(HsvComponent.Hue, colors.rgbColor(255, 0, 255))
```

### Komponenta CMYK

Z blokom [komponenta CMYK](/reference/colors/cmyk-component) lahko pridobite vrednost
cian (C), magenta (M), rumena (Y) ali črne (K) komponente iz barve.

```block
colors.cmykComponent(CmykComponent.Cyan, colors.rgbColor(255, 0, 255))
```
