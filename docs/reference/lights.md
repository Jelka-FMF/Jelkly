# Lučke

## Osnovno upravljanje z lučkami

### Nastavi lučke na barvo

Z blokom [nastavi lučke na barvo](/reference/lights/set-lights) lahko nastavite
barvo izbranih lučk na jelki.

```block
lights.setLights(lights.getLights(), colors.rgbColor(255, 0, 0))
```

### Ponastavi lučke

Z blokom [ponastavi lučke](/reference/lights/reset-lights) lahko izklopite
izbrane lučke na jelki. To je ekvivalentno temu, da izbrane lučke nastavite
na črno barvo.

```block
lights.resetLights(lights.getLights())
```

### Vse lučke

Z blokom [vse lučke](/reference/lights/get-lights) lahko dobite seznam
indeksov vseh lučk na jelki.

```block
lights.getLights()
```

### Število lučk

Z blokom [število lučk](/reference/lights/count-lights) lahko dobite število
vseh lučk na jelki.

```block
lights.countLights()
```

### Naključna lučka

Z blokom [naključna lučka](/reference/lights/random-light) lahko dobite naključno
število, ki predstavlja indeks ene izmed lučk na jelki.

```block
lights.randomLight()
```

## Koordinate v prostoru in pozicije lučk

Več o koordinatnem sistemu in pozicijah lučk si lahko preberete [v dokumentaciji
koordinatnega sistema](/reference/coordinates).

Uporabljate lahko tudi bloke za [oblike](/reference/shapes), ki vam omogočajo
enostavno izbiro lučk, ki ustrezajo osnovnim oblikam.

### Izberi lučke glede na njihove koordinate

Z blokom [lučke kjer](/reference/lights/lights-where) lahko dobite seznam lučk,
ki imajo posamezno koordinato večjo ali manjšo od določene vrednosti.

```block
lights.lightsWhere(Axis.X, Relation.Greater, 0, lights.getLights())
```

### Pridobi robne koordinate lučk

Z blokom [najmanjša/največja vrednost osi](/reference/lights/lights-bound)
lahko dobite najmanjšo ali največjo vrednost izbrane osi izmed izbranih lučk.

```block
lights.lightsBound(Axis.X, Bound.Min, lights.getLights())
```

## Druge funkcionalnosti z lučkami

### Pridobi barve lučk

Z blokoma [barve lučk](/reference/lights/get-colors) in [barva lučke](/reference/lights/get-color)
lahko dobite barve izbranih lučk na jelki.

```block
lights.getColors(lights.getLights())
```

```block
lights.getColor(lights.randomLight())
```

### Pridobi koordinate lučk

Z blokoma [koordinate lučk](/reference/lights/get-coordinates) in [koordinata
lučke](/reference/lights/get-coordinate) lahko dobite koordinate izbranih lučk
na jelki.

```block
lights.getCoordinates(Axis.X, lights.getLights())
```

```block
lights.getCoordinate(Axis.X, lights.randomLight())
```
