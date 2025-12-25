# Na začetku

Blok **na začetku (on start)** je poseben dogodek, ki se izvede, ko se program začne. V njem lahko
nastavite začetne vrednosti in ostale stvari, za katere želite, da se izvedejo le enkrat. V njem
ne morete prižigati ali ugašati lučk.

```blocks
let thousand = 1000
```

Na primer, spodnji vzorec [nastavi število sličic na sekundo](/reference/basic/set-frame-rate) na 1:

```blocks
basic.setFrameRate(1)
```

## Kaj pa JavaScript?

V načinu pisanja JavaScripta blok **na začetku** ne obstaja:

```typescript
function onStart(){} // Ne obstajam!
```

Blok **na začetku** obstaja samo v urejevalniku blokov. V JavaScriptu se vsa koda izvede zaporedno,
od prve vrstice naprej.
