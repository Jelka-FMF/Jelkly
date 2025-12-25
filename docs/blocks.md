# Bloki

### @description Jezikovna zgradba urejevalnika blokov

Bloke lahko skupaj združujete v program, ki bo predstavljal vaš vzorec.

Bloki so lahko dogodkovni (na začetku, na sličici), ali pa morajo biti povezani
z dogodkom, da se izvedejo.

Dogodek [na začetku](/blocks/on-start) se izvede prvi. V njem lahko nastavite začetne
vrednosti in ostale stvari, za katere želite, da se izvedejo le enkrat. V njem ne morete
prižigati ali ugašati lučk.

Blok [na sličici](/reference/basic/on-frame) se izvede za vsako sličico. Privzeto se
prikaže 50 sličic na sekundo. Število sličic na sekundo lahko spremenite z blokom
[nastavi število sličic na sekundo](/reference/basic/set-frame-rate). Znotraj vsake
sličice lahko poljubno prižigate in ugašate lučke. Vse spremembe se prikažejo ob
koncu posamezne sličice.

Več o koordinatnem sistemu in pozicijah lučk si lahko preberete [v dokumentaciji
koordinatnega sistema](/reference/coordinates).

## Bloki

```namespaces
for (let i = 0; i < 5; ++i) {}
if (true) {}
let x = 0
```

## Vgrajeni objekti

```namespaces
Math.randomRange(0,5);
"".compare("");
[0].push(0);
```

## Funkcionalnosti

```namespaces
lights.setLights()
colors.randomColor()
shapes.ball()
```

## Poglejte tudi

[zanke](/blocks/loops),
[logika](/blocks/logic),
[spremenljivke](/blocks/variables),
[matematika](/reference/math),
[besedilo](/reference/text),
[seznami](/reference/arrays)

[osnovno](/reference/basic),
[lučke](/reference/lights),
[barve](/reference/colors),
[oblike](/reference/shapes),
[senzorji](/reference/sensors)

[koordiantni sistem](/reference/coordinates)

[javascript bloki](/blocks/javascript-blocks),
[bloki po meri](/blocks/custom)
