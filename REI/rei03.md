# C3 : Esquema conceptual

## Modelo E/A

[Diagrama](files/modeloearei.jpeg)   

### Entidades-Tipo:
SALA(numero, numMaximo, preco, estado)

EQUIPAMENTO(identificador, nome, numero)

RESERVA(data, horaInicio, horaFim, estado)

ARTISTA(nome, tipo, contacto, email)

TECNICO(nome, número, contacto)

### Associações:
contem(SALA, EQUIPAMENTO) M:N - PARCIAL/TOTAL

adquire(RESERVA, SALA) - 1:N - TOTAL/TOTAL

feitaPor(RESERVA, ARTISTA) 1:N  - PARCIAL/TOTAL

associado(TECNICO, SALA) 1:1  - PARCIAL/TOTAL

## Regras de negócio adicionais (Restrições)

O sistema deve garantir algumas restrições importantes. Por exemplo, não é possível existir uma reserva sem um artista associado, nem uma sala pode estar em estado “em uso” sem uma reserva ativa. Também deve ser assegurado que não existem sobreposições de reservas para a mesma sala no mesmo intervalo de tempo.

---
[< Previous](rei02.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
