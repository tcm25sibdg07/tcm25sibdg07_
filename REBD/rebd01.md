# C1 : Introdução


## Descrição do trabalho
Um estúdio de gravação musical é uma organização que disponibiliza espaços
equipados para artistas produzirem conteúdos áudio, como músicas, podcasts ou
narrações. Este estúdio é composto por várias salas de gravação, cada uma com
características próprias que influenciam a sua utilização. Cada sala é identificada
por um número único e possui número máximo de pessoas, preço por hora de
utilização e estado atual, que pode ser: livre, em uso ou reservado. Além disso,
cada sala pode estar associada a um número de reserva quando se encontra
ocupada ou previamente marcada.

Cada sala de gravação é equipada com diferentes equipamentos de captação de
som, como microfones, interfaces de áudio e outros dispositivos técnicos essenciais
para o processo de gravação. Cada equipamento possui um identificador único,
nome e número, sendo importante garantir o controle e gestão destes recursos.
Uma sala pode conter vários equipamentos, e o mesmo tipo de equipamento pode
existir em várias salas, embora cada elemento seja único.

O funcionamento do estúdio envolve também a gestão de reservas. As reservas são
feitas por artistas que pretendem utilizar uma sala durante um determinado período.
Cada reserva deve conter informações como data, hora de início, hora de fim e
estado da reserva (ativa, concluída ou cancelada). Uma sala pode ter várias
reservas ao longo do tempo, mas cada reserva refere-se apenas a uma sala
específica.

Os artistas são utilizadores fundamentais do sistema. Cada artista possui um registo
com nome, tipo de artista (por exemplo, cantor, banda, produtor, podcaster),
contacto e email. Um artista pode efetuar várias reservas, mas cada reserva está
associada a um único artista. Este relacionamento permite acompanhar o histórico
de utilização do estúdio por parte de cada cliente.

Além disso, o estúdio conta com técnicos responsáveis por acompanhar e dar
suporte durante as sessões de gravação. Cada técnico possui nome, número e
contacto e é responsável por uma sala específica, garantindo o bom funcionamento
dos equipamentos e auxiliando os artistas durante o processo. Assume-se que cada
sala tem exatamente um técnico responsável, e cada técnico está associado a
apenas uma sala.

### Pressupostos:
Para a entidade RESERVA, foi introduzido o atributo id_reserva, de forma a garantir
a identificação única de cada reserva.
Para a entidade ARTISTA, foi assumido um atributo número como identificador
único, permitindo distinguir diferentes artistas, mesmo quando possuem o mesmo
nome.

## Descrição dos requisitos do utilizador
### Entidades-Tipo:

SALA(número, numMaximo, preco, estado)

EQUIPAMENTO(identificador, nome, numero)

RESERVA(id_ reserva, data, horaInicio, horaFim, estado)

ARTISTA(número, nome, tipo, {contacto}, email)

TECNICO(número, nome, {contacto})


### Associações:

contém(SALA, EQUIPAMENTO) M:N - PARCIAL/TOTAL

adquire(RESERVA, SALA) - N:1 - TOTAL/PARCIAL

feitaPor(RESERVA, ARTISTA) N:1 - TOTAL/PARCIAL

associado(TECNICO, SALA) 1:1 - TOTAL/TOTAL

---
[< Previous](rebd00.md) | [^ Main](/../../) | [Next >](rebd02.md)
:--- | :---: | ---: 
