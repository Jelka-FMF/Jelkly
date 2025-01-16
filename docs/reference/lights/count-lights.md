# Število lučk

Z blokom **število lučk** lahko dobite število vseh lučk na jelki.

```sig
lights.countLights()
```

## Vrne

* Število vseh lučk na jelki.

## Primeri

Vzorec, ki vsako sličico prižge novo lučko:

```blocks
basic.setFrameRate(5)
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(frameNumber % lights.countLights(), colors.randomColor())
})
```
