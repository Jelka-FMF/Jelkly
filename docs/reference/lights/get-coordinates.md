# Pridobi koordinate lučk

Z blokom **koordinate lučk** lahko dobite seznam barv izbranih lučk na jelki.

```sig
lights.getCoordinates(Axis.X, lights.getLights())
```

### ~ hint

#### Koordinatni sistem

Več o koordinatnem sistemu in pozicijah lučk si lahko preberete [v dokumentaciji
koordinatnega sistema](/reference/coordinates).

### ~

## Parametri

* **axis**: Os, katere koordinate želite pridobiti.
* **lights**: Seznam lučk, katerih koordinate želite pridobiti.

## Vrne

* Seznam koordinat izbranih lučk na jelki.

## Primeri

```block
lights.getCoordinates(Axis.X, lights.getLights())
```
