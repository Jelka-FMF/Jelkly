# Primerjava z ravnino

Blok **večje/manjše od ravnine** vrne seznam lučk, ki so večje ali manjše
od ravnine, podane s središčem in dvema rotacijama.

```sig
shapes.planeRelation(0, 0, 50, 0, 0, Relation.Greater)
```

## Parametri

* **x0**: X-koordinata središča ravnine.
* **y0**: Y-koordinata središča ravnine.
* **z0**: Z-koordinata središča ravnine.
* **psi (prva rotacija)**: Rotacija ravnine okoli `z` osi (v stopinjah).
* **ksi (druga rotacija)**: Rotacija ravnine okoli `xy` ravnine (v stopinjah).
* **relation**: Razmerje, ki ga želite preveriti.

<!---->

* **lights**: Seznam lučk, ki jih želite preveriti. Če ni podan, se uporabijo vse lučke na jelki.

Rotacije ter ostali parametri delujejo enako, kot pri bloku [ravnina](/reference/shapes/plane).

## Vrne

* Seznam lučk, ki so večje ali manjše od ravnine.

## Primeri

Vzorec, ki prižge lučke, večje od nagnjene ravnine:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(
        shapes.planeRelation(0, 0, 50, 0, 45, Relation.Greater),
        colors.rgbColor(0, 0, 255)
    )
})
```

Vzorec, ki postopoma rotira ravnino ter prižge lučke, večje in manjše od nje:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(
        shapes.planeRelation(0, 0, 50, 0, frameNumber, Relation.Greater),
        colors.rgbColor(255, 0, 0)
    )
    lights.setLights(
        shapes.planeRelation(0, 0, 50, 0, frameNumber, Relation.Less),
        colors.rgbColor(0, 255, 0)
    )
})
```
