# Valj

Blok **valj** vrne seznam lučk, ki so znotraj valja, podanega s središčem,
polmerom, višino in dvema rotacijama.

```sig
shapes.cylinder(0, 0, 50, 0, 0, 20, 10)
```

## Parametri

* **x0**: X-koordinata središča valja.
* **y0**: Y-koordinata središča valja.
* **z0**: Z-koordinata središča valja.
* **psi (prva rotacija)**: Rotacija valja okoli `z` osi (v stopinjah).
* **ksi (druga rotacija)**: Rotacija valja okoli `y` osi (v stopinjah).
* **r (polmer)**: Polmer valja.
* **h (višina)**: Višina valja.

Če sta rotaciji nastavljeni na 0, je valj v ležečem položaju z osjo vzdolž `x` osi.

## Vrne

* Seznam lučk znotraj valja.

## Primeri

Vzorec, ki nariše valj na sredini jelke:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(
        shapes.cylinder(0, 0, 50, 0, 0, 20, 10),
        colors.rgbColor(0, 0, 255)
    )
})
```
