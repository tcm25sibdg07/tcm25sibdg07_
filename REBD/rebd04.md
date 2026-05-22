# C4 : Esquema Relacional

[Tabelas](tabelas.pdf)

## Vistas

```sql
CREATE view `salas_livres` AS
SELECT * FROM sala
WHERE estado='Livre';
```
---
| [< Previous](rebd03.md) | [^ Main](/../../) | [Next >](rebd05.md) |
| :---------------------- | :------------------------------------------------------: | ------------------: |
