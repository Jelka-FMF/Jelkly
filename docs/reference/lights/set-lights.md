# Nastavi lučke na barvo

Z blokom **nastavi lučke na barvo** lahko nastavite barvo izbranih lučk na jelki
na določeno barvo.

```sig
lights.setLights(lights.getLights(), colors.rgbColor(255, 0, 0))
```

### ~ hint

#### Barve

Več o barvah si lahko preberete [v dokumentaciji barv](/reference/colors).

### ~

## Parametri

* **lights**: Seznam indeksov lučk, ki jih želite nastaviti.
* **color**: Barva, na katero želite nastaviti lučke.

## Primeri

Vzorec, ki vse lučke na jelki nastavi na rdečo barvo:

```blocks
basic.onFrame(function (frameNumber, timeSinceStart) {
    lights.setLights(lights.getLights(), colors.rgbColor(255, 0, 0))
})
```
