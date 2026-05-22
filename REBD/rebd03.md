# C3 : Do Modelo EA a Relação

## Processo
A transformação do modelo Entidade-Tipo para o modelo relacional foi realizada
com base nas regras estudadas. Após criar os modelos entidades-tipo e estabelecer
as respetivas associações presentes abaixo:


Entidades-Tipo:

SALA(número, numMaximo, preco, estado)

EQUIPAMENTO(identificador, nome, numero)

RESERVA(id_ reserva, data, horaInicio, horaFim, estado)

ARTISTA(número, nome, tipo, {contacto}, email)

TECNICO(número, nome, {contacto})


Associações:

contém(SALA, EQUIPAMENTO) M:N - PARCIAL/TOTAL

adquire(RESERVA, SALA) - N:1 - TOTAL/PARCIAL

feitaPor(RESERVA, ARTISTA) N:1 - TOTAL/PARCIAL

associado(TECNICO, SALA) 1:1 - TOTAL/TOTAL


Cada entidade do modelo EA foi convertida diretamente numa relação, mantendo os
seus atributos e identificadores e dando origem às respectivas tabelas no modelo
relacional.


● Passo 1: Associações 1:1

associado(TECNICO, SALA) 1:1 - TOTAL/TOTAL

A regra diz que devemos escolher uma das relações, normalmente a que
tem participação total em R. Mas no meu caso todos tem participação total
então não importa muito.

Então eu incluí como chave estrangeira em Técnico a chave principal de SALA.

TÉCNICO(número, nome, número_sala)

Chave própria: número;

Chave estrangeira: número_sala;


● Passo 2: Associações 1:N

adquire(RESERVA, SALA) - N:1 - TOTAL/PARCIAL

feitaPor(RESERVA, ARTISTA) N:1 - TOTAL/PARCIAL


A regra diz que devemos escolher a relação correspondente à entidade
participante do lado N em R. Neste caso a relação RESERVA.

Incluir como chave estrangeira em RESERVA a chave principal de SALA e
ARTISTA.

Incluir os atributos simples da associação na relação RESERVA.

RESERVA(id_reserva, data, horainicio, horafim, estado, número_sala,
número_artista)

Chave própria: id_reserva;

Chaves estrangeiras: número_sala + número_artista;


● Passo 3: Associações N:M

contém(SALA, EQUIPAMENTO) M:N - PARCIAL/TOTAL

A regra diz que devemos criar uma nova relação para representar a
associação R:

Incluir como chave estrangeiras na nova relação as chaves principais das
relações que representam as entidades SALA e EQUIPAMENTO participantes em
R. E incluir todos atributos simples da Associação R na nova relação.

PARTICIPA EM(número_sala, identificador_equipamento)

Chaves próprias: número_sala + identificador_equipamento;


● Passo 4: Atributos multivalor

A regra diz que para cada atributo multivalor CONTACTO, cria-se uma nova relação
que:

 Inclui o atributo NÚMERO, a chave principal, ARTISTA, da relação que
representa a entidade-tipo que tem CONTACTO como atributo multivalor.

A chave principal dessa relação, será a combinação dos atributos NÚMERO e
CONTACTO.

CONTACTO_ARTISTA(número_artista FK, contacto)

Chave própria = (número_artista, contacto)

CONTACTO_TECNICO(número_técnico FK, contacto)

Chave própria = (número_técnico, contacto)

Desta forma, foi possível garantir a integridade e coerência dos dados no modelo
relacional resultante.

---
[< Previous](rebd02.md) | [^ Main](/../../) | [Next >](rebd04.md)
:--- | :---: | ---: 
