## Senzorji

Vzorci lahko uporabljajo različne senzorje in kontrole ter na podlagi njih interaktivno
upravljajo z lučkami.

Če je takšen vzorec trenutno aktiven na Jelki FMF in se fizično nahajate pri njej,
lahko z vzorcem komunicirate s pomočjo [strani za interakcijo](https://jelka.fmf.uni-lj.si/interaction/).

### ~ hint

#### Izdelava interaktivnih vzorcev

Pri razvoju interaktivnih vzorcev prosimo upoštevajte, da ni nujno, da bo kdo vedno
upravljal z vašim vzorcem, ko bo ta aktiven. Vzorci naj bodo zato zasnovani tako, da
bodo smiselno delovali tudi brez interakcije.

### ~

## Igralna palica

Blok [razdalja igralne palice](/reference/sensors/joystick-distance) vrne razdaljo
igralne palice od njenega središča, podano kot vrednost med 0 in 1.

```block
sensors.joystickDistance()
```

Blok [kot igralne palice](/reference/sensors/joystick-angle) vrne kot igralne
palice glede na pozitivni poltrak `x` osi, merjen v stopinjah med 0 in 360.

```block
sensors.joystickAngle()
```

## Gumbi

Blok [gumb pritisnjen](/reference/sensors/button-pressed) vrne vrednost `true`, če je
določen gumb pritisnjen, sicer pa `false`.

```block
sensors.buttonPressed(Button.ArrowUp)
```
