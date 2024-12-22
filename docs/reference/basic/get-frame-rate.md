# Pridobi število sličic na sekundo

Z blokom **pridobi število sličic na sekundo (get frame rate)** lahko preverite,
kolikokrat na sekundo se bo izvedla koda znotraj bloka [na sličici](/reference/basic/on-frame).

```sig
basic.getFrameRate()
```

## Vrne

* Trenutno nastavljeno število sličic na sekundo.

## Primeri

Vzorec, ki zelo počasi postopoma spreminja barvo vseh lučk:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.hsvColor(frameNumber / basic.getFrameRate(), 100, 100))
})
```
