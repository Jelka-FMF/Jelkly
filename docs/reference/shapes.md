# Oblike
Oblika vrne seznam lučk, ki so znotraj te oblike. Ta seznam lahko damo znotraj bloka `nastavi seznam lučk na barvo`. 

```block
lights.setLights(shapes.ball(
    14,
    14,
    13,
    15
    ), colors.rgbColor(
    0,
    255,
    255
    ))
```

## Krogla
Vrne seznam lučk, ki se sekajo s kroglo (torej so znotraj krogle). Podane so koordinate (x,y,z), ki predstavljajo središče krogle, ter radij (polmer) krogle. 
```block
    shapes.ball(0, 0, 0, 0)
```
## Sfera
Vrne seznam lučk, ki se sekajo s sfero (to je površina krogle). Podobno kot pri krogli so podane koordinate (x,y,z), ki predstavljajo njeno središče ter njen polmer. Poleg tega lahko nastavite tudi debelino sfere.
```block
    shapes.sphere(0, 0, 0, 0, 0)
```

## Valj
Vrne seznam lučk, ki so znotraj valja. Podano je središče valja, njegov polmer in višina. 

Podani sta tudi dve možni rotaciji, Ψ (psi) vzdolž `x` osi in ξ (ksi) vzdolž `y` osi. Če valja ne želiš rotirati, pusti rotaciji na `0`.
```block
    shapes.cylinder(0, 0, 0, 0, 0, 0, 0)
```

## Ravnina
Vrne seznam lučk, ki se sekajo z ravnino. Debelina ravnine je nastavljiva, in na jelki izgleda kot črta. 

Ravnina je določena s tremi točkami (x,y,z) in jo je mogoče rotirati vzdolž `z` osi (rotacija Ψ - psi) in vzdolž `xy` ravnine (rotacija ξ - ksi).
```block
    shapes.plane(0, 0, 0, 0, 0, 0)
```

### Primerjava koordinat lučk z ravnino
Pozor! Uporabiti moraš drug blok za koordinate kot sicer. 
```block
lights.setLights(lights.getCoordinates(Axis.X, shapes.planeRelation(
    0,
    0,
    0,
    0,
    0,
    Relation.Greater
    )), colors.rgbColor(
    0,
    255,
    255
    ))
```


