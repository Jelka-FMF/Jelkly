# Pridobi koordinato lučke

Z blokom **koordinata lučke** lahko dobite seznam barv izbranih lučk na jelki.

```sig
lights.getCoordinate(Axis.X, lights.randomLight())
```

### ~ hint

#### Koordinatni sistem

Več o koordinatnem sistemu in pozicijah lučk si lahko preberete [v dokumentaciji
koordinatnega sistema](/reference/coordinates).

### ~

## Parametri

* **axis**: Os, katere koordinate želite pridobiti.
* **light**: Lučka, katere koordinato želite pridobiti.

## Vrne

* Koordinato izbrane lučke na jelki.

## Primeri

```block
lights.getCoordinate(Axis.X, lights.randomLight())
```
