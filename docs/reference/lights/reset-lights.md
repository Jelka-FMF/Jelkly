# Ponastavi lučke

Z blokom **ponastavi lučke** lahko izklopite izbrane lučke na jelki.

To je ekvivalentno temu, da te lučke nastavite na črno barvo.

```sig
lights.resetLights(lights.getLights())
```

## Parametri

* **lights**: Seznam indeksov lučk, ki jih želite izklopiti.

## Primeri

Vzorec, ki izklopi vse lučke na jelki:

```blocks
lights.resetLights(lights.getLights())
```
