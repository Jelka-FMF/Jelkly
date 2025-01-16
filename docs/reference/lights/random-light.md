# Naključna lučka

Z blokom **naključna lučka** lahko dobite naključno število, ki predstavlja
indeks ene izmed lučk na jelki.

```sig
lights.randomLight()
```

## Vrne

* Naključno število, ki predstavlja indeks ene izmed lučk na jelki.

## Primeri

Vzorec, ki vsako sličico prižge naključno lučko:

```blocks
basic.setFrameRate(5)
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(lights.randomLight(), colors.randomColor())
})
```
