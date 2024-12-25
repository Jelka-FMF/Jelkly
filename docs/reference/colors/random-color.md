# Naključna barva

Z blokom **naključna barva** lahko ustvarite naključno barvo.

```sig
colors.randomColor()
```

## Vrne

* Naključno barvo.

## Primeri

Vzorec, ki nastavi število sličic na sekundo na 1 ter vsako sličico zamenja
barvo vseh lučk:

```blocks
basic.setFrameRate(1)
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.randomColor())
})
```
