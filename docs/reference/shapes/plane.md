# Ravnina

Blok **ravnina** vrne seznam lučk, ki se sekajo z ravnino, podano s središčem,
debelino in dvema rotacijama.

```sig
shapes.plane(0, 0, 50, 0, 0, 10)
```

## Parametri

* **x0**: X-koordinata središča ravnine.
* **y0**: Y-koordinata središča ravnine.
* **z0**: Z-koordinata središča ravnine.
* **psi (prva rotacija)**: Rotacija ravnine okoli `z` osi (v stopinjah).
* **ksi (druga rotacija)**: Rotacija ravnine okoli `xy` ravnine (v stopinjah).
* **d (debelina)**: Debelina ravnine.

<!---->

* **lights**: Seznam lučk, ki jih želite preveriti. Če ni podan, se uporabijo vse lučke na jelki.

Če sta rotaciji nastavljeni na 0, je ravnina vzporedna z `yz` ravnino, torej
je na jelki videti kot navpična črta.

## Vrne

* Seznam lučk, ki se sekajo z ravnino.

## Primeri

Vzorec, ki nariše navpično črto na sredini jelke:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(
        shapes.plane(0, 0, 50, 0, 0, 10),
        colors.rgbColor(0, 255, 0)
    )
})
```

Vzorec, ki postopoma rotira ravnino okoli `xy` ravnine:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(
        shapes.plane(0, 0, 50, 0, frameNumber, 10),
        colors.rgbColor(255, 255, 0)
    )
})
```
