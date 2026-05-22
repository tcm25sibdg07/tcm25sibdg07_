# C3 : SQL

## DDL

```sql
CREATE TABLE `artista` (
`numero` varchar(7) NOT NULL,
`nome` varchar(100) NOT NULL,
`tipo_artista` varchar(45) NOT NULL,
`email` varchar(100) NOT NULL,
PRIMARY KEY (`numero`));

CREATE TABLE `equipamento` (
`identificador` int NOT NULL,
`nome` varchar(100) NOT NULL,
`numero` int NOT NULL,
PRIMARY KEY (`identificador`));

CREATE TABLE `sala` (
`numero` int NOT NULL,
`numero_maximo` int NOT NULL,
`preco` decimal(10,2) NOT NULL,
`estado` varchar(20) NOT NULL,
PRIMARY KEY (`numero`));

CREATE TABLE `reserva` (
`id_reserva` int NOT NULL AUTO_INCREMENT,
`data` date NOT NULL,
`hora_inicio` time NOT NULL,
`hora_fim` time NOT NULL,
`estado` varchar(100) NOT NULL,
`numero_sala` int NOT NULL,
`numero_artista` varchar(7) NOT NULL,
PRIMARY KEY (`id_reserva`),
FOREIGN KEY (`numero_sala`)
REFERENCES `sala`(`numero`),
FOREIGN KEY (`numero_artista`)
REFERENCES `artista`(`numero`));

CREATE TABLE `tecnico` (
`numero` varchar(7) NOT NULL,
`nome` varchar(100) NOT NULL,
`numero_sala` int NOT NULL,
PRIMARY KEY (`numero`),
FOREIGN KEY (`numero_sala`)
REFERENCES `sala`(`numero`));
```

## DML

```sql
INSERT INTO artista
values ('A047119', 'Pedro', 'Cantor', 'a047119@umaia.pt'),
('A048302', 'Joao', 'Banda', 'a048302@umaia.pt'),
('A047120', 'Ana', 'Podcaster', 'a047120@umaia.pt');

INSERT INTO equipamento
values (03, 'Microfone Condensador', 103),
(04, 'Interface de Audio', 104),
(05, 'Headphones Estudio', 105);

INSERT INTO sala
values (203, 1, 0, 'Livre'),
(205, 10, 100, 'Em uso'),
(207, 1, 50, 'Reservado');

INSERT INTO reserva(data, hora_inicio, hora_fim, estado, numero_sala, numero_artista)
values ('2026-04-15', '11:15:59', '14:15:00', 'concluida', 203, 'A047119'),
('2026-04-15', '15:15:59', '18:15:00', 'ativa', 205, 'A048302'),
('2026-04-16', '18:15:59', '21:15:00', 'cancelada', 207, 'A047120');

INSERT INTO técnico
values ('D035097', 'Jorge', 203),
('D037261', 'Jose', 205),
('D037803', 'Mario', 207);
```
[Pedidos](pedidos.pdf)

---
[< Previous](rebd04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
