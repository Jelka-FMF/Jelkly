# Lučke

## Osnovno upravljanje z lučkami
### Nastavi seznam lučk na barvo
V seznamu so cela števila od 0 do 500 (kolikor je lučk), barva pa je podana v RGB. Tukaj si lahko preberete več o barvah.
```block
        lights.setLights(lights.getLights(), colors.rgbColor(
    0,
    0,
    0
    ))
```

### Ponastavi lučke
Izklopi vse lučke na jelki, vse lučke imajo vrednost 0.
```block
    lights.resetLights()
```

### Vse lučke
Vrne seznam indeksov, ki predstavljajo vse lučke na jelki
```block
    lights.getLights()
```

### Število lučk
Prešteje koliko lučk je v seznamu in vrne število.
```block
    lights.countLights()
```

### Naključna lučka
Vrne naključno število, ki je indeks ene izmed lučk na jelki.
```block
    lights.setLights(lights.randomLight(), colors.rgbColor(
        0,
        0,
        0
        ))
```
## Koordinate v prostoru & lučke

### Izbira lučk glede na njihove koordinate
Vrne nov seznam lučk, ki so bile v originalnem seznamu in ki imajo x, y ali z koordinato večjo oz. manjšo od nekega celega števila.
```block
    lights.setLights(lights.lightsWhere(Axis.X, Relation.Greater, 0, lights.getLights()), colors.rgbColor(
    0,
    0,
    0
    ))
```

### Izbira x koordinate lučk iz seznama
Vrne seznam, ki vsebuje koordinate lučk iz seznama. To so števila od -100 do 100 in so lahko decimalna. Podobno lahko izberete y koordinate lučk (od -100 do 100) in z koordinate lučk (od 0 do 100).
```block
    lights.getCoordinates(Axis.X, seznam)
```

### Izbira x koordinate določene lučke
Vrne izbrano koordinato (x, y ali z) te lučke.
```block
    lights.getCoordinate(Axis.X, 5)
```

### Kombiniranje pogojev za koordinate
Če želite izbrati lučke, ki imajo npr. koordinato `x < 0` in koordinato `y > 25` lahko uporabite gnezdenje blokov.
```block
    lights.setLights(lights.lightsWhere(Axis.X, Relation.Greater, 0, lights.lightsWhere(Axis.Y, Relation.Greater, 0, lights.getLights())), colors.rgbColor(
    0,
    0,
    0
    ))
```

