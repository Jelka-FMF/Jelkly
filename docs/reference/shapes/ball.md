# Krogla

Blok **krogla** vrne seznam lučk, ki so znotraj krogle, podane s središčem in polmerom.

```sig
shapes.ball(0, 0, 50, 20)
```

## Parametri

* **x0**: X-koordinata središča krogle.
* **y0**: Y-koordinata središča krogle.
* **z0**: Z-koordinata središča krogle.
* **r (polmer)**: Polmer krogle.

## Vrne

* Seznam lučk znotraj krogle.

## Primeri

Vzorec, ki nariše kroglo na sredini jelke:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(
        shapes.ball(0, 0, 50, 20),
        colors.rgbColor(0, 255, 255)
    )
})
```

Vzorec, ki postopoma spreminja polmer krogle:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(
        shapes.ball(0, 0, 50, (frameNumber / 5) % 60),
        colors.rgbColor(255, 0, 255)
    )
})
```
