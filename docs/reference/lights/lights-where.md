# Lučke glede na koordinate

Z blokom **lučke kjer** lahko dobite seznam lučk, ki imajo posamezno koordinato
večjo ali manjšo od določene vrednosti.

```sig
lights.lightsWhere(Axis.X, Relation.Greater, 0, lights.getLights())
```

### ~ hint

#### Koordinatni sistem

Več o koordinatnem sistemu in pozicijah lučk si lahko preberete [v dokumentaciji
koordinatnega sistema](/reference/coordinates).

### ~

### ~ hint

#### Oblike

Uporabljate lahko tudi bloke za [oblike](/reference/shapes), ki vam omogočajo
enostavno izbiro lučk, ki ustrezajo osnovnim oblikam. Oblike lahko poljubno
kombinirate tudi s tem blokom.

### ~

## Parametri

* **axis**: Os, ki jo želite preveriti.
* **relation**: Razmerje, ki ga želite preveriti.
* **value**: Vrednost, ki jo želite preveriti.
* **lights**: Seznam lučk, ki jih želite preveriti.

## Vrne

* Seznam lučk, ki ustrezajo pogojem.

## Primeri

Vzorec, ki prižge lučke, za katere velja `x > 0`:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(
        lights.lightsWhere(Axis.X, Relation.Greater, 0, lights.getLights()),
        colors.rgbColor(0, 0, 255)
    )
})
```

Vzorec, ki prižge lučke, za katere velja `x > 0` in `z < 50`:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(
        lights.lightsWhere(Axis.X, Relation.Greater, 0, lights.lightsWhere(Axis.Z, Relation.Less, 50, lights.getLights())),
        colors.rgbColor(0, 255, 0)
    )
})
```
