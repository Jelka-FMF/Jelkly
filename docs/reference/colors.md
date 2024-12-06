# Barve

### Naključna barva
Ustvari naključno barvo.
```block
    lights.setLights(lights.getLights(), colors.randomColor())
```

## Načini podajanja barve
### RGB barva
Izberi barvo tako da določi koliko rdeče (R), zelene (G) in modre (B) naj ima izbrana barva.
```block
    lights.setLights(lights.randomLight(), colors.rgbColor(
        0,
        0,
        0
        ))
```
### HSL barva
Izberi barvo tako da določi njen odtenek (H), nasičenost (S) in svetlost (L).
```block
    lights.setLights(lights.randomLight(), colors.hslColor(
    0,
    100,
    50
    ))
```


### HSV barva
Izberi barvo tako da določi njen odtenek (H), nasičenost (S) in vrednost (V).
```block
    lights.setLights(lights.randomLight(), colors.hsvColor(
    0,
    100,
    100
    ))
```

### CMYK barva
```block
    lights.setLights(lights.randomLight(), colors.cmykColor(
    0,
    35,
    34,
    0
    ))
```