# Osnovno upravljanje

## Na začetku
Dogodek [na začetku](/blocks/on-start) se izvede prvi. V njem lahko nastavite začetne
vrednosti in ostale stvari, ki jih želite, da se izvedejo le enkrat. V njem ne morete
prižigati ali ugašati lučk.

```blocks
```

## Na sličici (on frame)

Blok [na sličici](/reference/on-frame) se izvede za vsako sličico. Privzeto se prikaže
50 sličic na sekundo. Število sličic na sekundo lahko spremenite z blokom [nastavi
število sličic na sekundo](/reference/set-frame-rate). Znotraj vsake sličice lahko
poljubno prižigate in ugašate lučke. Vse spremembe se prikažejo ob koncu posamezne
sličice.

```block
basic.onFrame(function (frameNumber, timeSinceStart) {
	
})
```

## Nastavi število sličic na sekundo (framerate)

Ta blok nastavi, kolikokrat se bo izvedla zanka "na sličici" v eni skundi. Spodnja koda pomeni, da bi se v 1 sekundi izvedla 50-krat. To vidimo tako, da gre "zelo hitro". Omejitev je 60 FPS, karkoli več se ne bo videlo na jelki zaradi tehničnih omejitev.

```block
basic.setFrameRate(50)
```

## Koliko sličic na sekundo vidimo?
```block
basic.getFrameRate()
```



