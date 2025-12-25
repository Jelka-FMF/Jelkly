# Gumb pritisnjen

Z blokom **gumb pritisnjen** lahko preverite, ali je določen gumb pritisnjen.

```sig
sensors.buttonPressed(Button.ArrowUp)
```

### ~ hint

#### Izdelava interaktivnih vzorcev

Pri razvoju interaktivnih vzorcev prosimo upoštevajte, da ni nujno, da bo kdo vedno
upravljal z vašim vzorcem, ko bo ta aktiven. Vzorci naj bodo zato zasnovani tako, da
bodo smiselno delovali tudi brez interakcije.

### ~

### ~ hint

#### Gumbi na strani za interakcijo

Na strani za interakcijo so na voljo naslednji gumbi:

* **Gumb za gor** (`Button.ArrowUp`)
* **Gumb za dol** (`Button.ArrowDown`)
* **Gumb za levo** (`Button.ArrowLeft`)
* **Gumb za desno** (`Button.ArrowRight`)
* **Gumb A** (`Button.LetterA`)
* **Gumb B** (`Button.LetterB`)
* **Gumb C** (`Button.LetterC`)
* **Gumb D** (`Button.LetterD`)

### ~

## Parametri

* **button**: Gumb, ki ga želite preveriti.

## Vrne

* `true`, če je gumb pritisnjen, sicer pa `false`.

## Primeri

Vzorec, ki prižge vse lučke, ko je pritisnjen gumb za gor:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    if (sensors.buttonPressed(Button.ArrowUp)) {
        lights.setLights(lights.getLights(), colors.rgbColor(0, 255, 0))
    } else {
        lights.resetLights(lights.getLights())
    }
})
```
