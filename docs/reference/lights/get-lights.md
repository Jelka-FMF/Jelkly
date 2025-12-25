# Vse lučke

Z blokom **vse lučke** lahko dobite seznam indeksov vseh lučk na jelki.

Indeksi so predstavljeni kot cela števila od nič naprej, pri čemer je nič prva
lučka v verigi lučk. Na specifično postavitev lučk se ne zanašajte, saj se lahko
v prihodnosti spremeni. Lahko se zgodi tudi, da kakšen indeks manjka.

```sig
lights.getLights()
```

## Vrne

* Seznam indeksov vseh lučk na jelki.

## Primeri

Vzorec, ki vse lučke na jelki nastavi na rdečo barvo:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.rgbColor(255, 0, 0))
})
```
