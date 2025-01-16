# Nastavi število sličic na sekundo

Z blokom **nastavi število sličic na sekundo (set frame rate)** lahko določite,
kolikokrat na sekundo se bo izvedla koda znotraj bloka [na sličici](/reference/basic/on-frame).

Privzeto se prikaže 50 sličic na sekundo. Zaradi omejitev strojne opreme je največje
možno število sličic na sekundo omejeno na 60.

Število sličic na sekundo je priporočljivo nastaviti znotraj bloka [na začetku](/blocks/on-start).

```sig
basic.setFrameRate(50)
```

## Parametri

* **frameRate**: število sličic na sekundo, ki jih želite prikazati.

## Primeri

Vzorec, ki nastavi število sličic na sekundo na 1 ter vsako sličico zamenja
barvo vseh lučk:

```blocks
basic.setFrameRate(1)
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.randomColor())
})
```
