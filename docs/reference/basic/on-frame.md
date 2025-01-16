# Na sličici

Blok **na sličici (on frame)** se izvede za vsako sličico. Znotraj vsake sličice lahko
poljubno prižigate in ugašate lučke. Vse spremembe se prikažejo ob koncu posamezne sličice.

Privzeto se prikaže 50 sličic na sekundo. Število sličic na sekundo lahko spremenite
z blokom [nastavi število sličic na sekundo](/reference/basic/set-frame-rate).

```sig
basic.onFrame(function (frameNumber, timeSinceStart) {})
```

## Parametri

* **frameNumber**: Trenutna številka sličice.
* **timeSinceStart**: Čas od začetka izvajanja vzorca v milisekundah

## Primeri

Vzorec, ki vsako sličico prižge novo lučko:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.resetLights(lights.getLights())
    lights.setLights(frameNumber % lights.countLights(), colors.randomColor())
})
```
