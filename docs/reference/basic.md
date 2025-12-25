# Osnovno upravljanje

## Na začetku (on start)

Dogodek [na začetku](/blocks/on-start) se izvede prvi. V njem lahko nastavite začetne
vrednosti in ostale stvari, za katere želite, da se izvedejo le enkrat. V njem ne morete
prižigati ali ugašati lučk.

```blocks
```

## Na sličici (on frame)

Blok [na sličici](/reference/basic/on-frame) se izvede za vsako sličico. Privzeto se
prikaže 50 sličic na sekundo. Število sličic na sekundo lahko spremenite z blokom
[nastavi število sličic na sekundo](/reference/basic/set-frame-rate). Znotraj vsake
sličice lahko poljubno prižigate in ugašate lučke. Vse spremembe se prikažejo ob
koncu posamezne sličice.

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {})
```

## Nastavi število sličic na sekundo (set frame rate)

Z blokom [nastavi število sličic na sekundo](/reference/basic/set-frame-rate) lahko
določite, kolikokrat na sekundo se bo izvedla koda znotraj bloka [na sličici](/reference/basic/on-frame).
Privzeto se prikaže 50 sličic na sekundo. Zaradi omejitev strojne opreme je največje
možno število sličic na sekundo omejeno na 60.

```block
basic.setFrameRate(50)
```

## Pridobi število sličic na sekundo (get frame rate)

Z blokom [pridobi število sličic na sekundo](/reference/basic/get-frame-rate) lahko
preverite, kolikokrat na sekundo se bo izvedla koda znotraj bloka [na sličici](/reference/basic/on-frame).

```block
basic.getFrameRate()
```
