# C2 : Esquema conceptual

## Modelo E/A
[Diagrama](modeloea.jpeg)

## Regras de negócio adicionais (Restrições)
### Sala

Uma sala não pode ultrapassar o número máximo de ocupação (numMaximo)
definido.

O preço associado à sala deve ser maior que zero.

Alterações ao estado da sala devem ser automáticas:
● “livre” quando não existir reserva ativa;
● “em uso” durante uma reserva válida;
● “indisponível” quando em manutenção.

Não é permitido eliminar uma sala, artista ou equipamento caso existam reservas
associadas ativas.

Uma sala em estado “indisponível” não pode receber novas reservas.
O número da sala deve ser único.

Um equipamento apenas pode ser associado a salas quando o seu estado for
“disponível”.

### Equipamentos

O identificador do equipamento deve ser único.

### Pessoal

O número de contacto do técnico e do artista deve respeitar um formato válido e
conter apenas dígitos válidos.

Um artista apenas pode possuir uma reserva ativa por intervalo temporal, evitando
conflitos de utilização.

Um técnico não pode estar associado a duas reservas que ocorram
simultaneamente.

### Reserva

Uma reserva deve possuir obrigatoriamente um estado válido (por exemplo: “ativa”,
“cancelada”, “concluída”).

O horário de fim (horaFim) de uma reserva deve ser sempre posterior ao horário de
início (horaInicio).

O contacto e o email do artista devem ser únicos no sistema.

Uma reserva deve estar associada obrigatoriamente a:
● um único artista;
● uma única sala;
● pelo menos um técnico responsável.

Não pode existir duplicação exata de reservas com:
● mesma sala;
● mesma data;
● mesma hora de início e fim.

Uma reserva só pode ser marcada para datas futuras ou para horários válidos
definidos pelo sistema.

Reservas canceladas não podem manter salas em estado “em uso”.

---
[< Previous](rebd01.md) | [^ Main](/../../) | [Next >](rebd03.md)
:--- | :---: | ---: 
