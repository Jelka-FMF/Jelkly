# Robne kooridnate lučk

Z blokom [najmanjša/največja vrednost osi](/reference/lights/lights-bound) lahko
dobite najmanjšo ali največjo vrednost izbrane osi izmed izbranih lučk.

```sig
lights.lightsBound(Axis.X, Bound.Min, lights.getLights())
```

## Parametri

* **axis**: Os, ki jo želite preveriti.
* **bound**: Meja, ki jo želite preveriti.
* **lights**: Seznam lučk, ki jih želite preveriti.

## Vrne

* Najmanjšo ali največjo vrednost izbrane osi izmed izbranih lučk.

## Primeri

```block
lights.lightsBound(Axis.X, Bound.Min, lights.getLights())
```
