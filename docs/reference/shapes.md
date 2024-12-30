# Oblike

Oblika vrne seznam lučk, ki so znotraj te oblike. Ta seznam lahko nato na primer
uporabimo znotraj bloka [nastavi lučke na barvo](/reference/lights/set-lights).

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(
        shapes.ball(0, 0, 70, 20),
        colors.rgbColor(0, 255, 255)
    )
})
```

Več o koordinatnem sistemu in pozicijah lučk, ki jih uporabljajo oblike, si
lahko preberete [v dokumentaciji koordinatnega sistema](/reference/coordinates).

## Krogla

Blok [krogla](/reference/shapes/ball) vrne seznam lučk, ki so znotraj krogle,
podane s središčem in polmerom.

```block
shapes.ball(0, 0, 50, 20)
```

## Sfera

Blok [sfera](/reference/shapes/sphere) vrne seznam lučk, ki se sekajo s sfero
(površino krogle), podano s središčem, polmerom in debelino.

```block
shapes.sphere(0, 0, 50, 20, 5)
```

## Valj

Blok [valj](/reference/shapes/cylinder) vrne seznam lučk, ki so znotraj valja,
podanega s središčem, polmerom, višino in dvema rotacijama.

```block
shapes.cylinder(0, 0, 50, 0, 0, 20, 10)
```

## Ravnina

Blok [ravnina](/reference/shapes/plane) vrne seznam lučk, ki se sekajo z ravnino,
podano s središčem, debelino in dvema rotacijama.

```block
shapes.plane(0, 0, 50, 0, 0, 10)
```

## Primerjava z ravnino

Blok [večje/manjše od ravnine](/reference/shapes/plane-relation) vrne seznam lučk,
ki so večje ali manjše od ravnine, podane s središčem in dvema rotacijama.

```block
shapes.planeRelation(0, 0, 50, 0, 0, Relation.Greater)
```
