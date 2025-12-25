# Sfera

Blok **sfera** vrne seznam lučk, ki se sekajo s sfero (površino krogle),
podano s središčem, polmerom in debelino.

```sig
shapes.sphere(0, 0, 50, 20, 5)
```

## Parametri

* **x0**: X-koordinata središča sfere.
* **y0**: Y-koordinata središča sfere.
* **z0**: Z-koordinata središča sfere.
* **r (polmer)**: Polmer sfere.
* **d (debelina)**: Debelina sfere

<!---->

* **lights**: Seznam lučk, ki jih želite preveriti. Če ni podan, se uporabijo vse lučke na jelki.

## Vrne

* Seznam lučk, ki se sekajo s sfero.

## Primeri

Vzorec, ki nariše sfero na sredini jelke:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(
        shapes.sphere(0, 0, 50, 20, 5),
        colors.rgbColor(255, 0, 0)
    )
})
```

Vzorec, ki postopoma spreminja debelino sfere:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(
        shapes.sphere(0, 0, 50, 20, (frameNumber / 5) % 20),
        colors.rgbColor(0, 255, 0)
    )
})
```
