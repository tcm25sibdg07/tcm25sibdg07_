import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbestudiomusicalDataSource} from '../datasources';
import {Equipamento, EquipamentoRelations} from '../models';

export class EquipamentoRepository extends DefaultCrudRepository<
  Equipamento,
  typeof Equipamento.prototype.identificador,
  EquipamentoRelations
> {
  constructor(
    @inject('datasources.Dbestudiomusical') dataSource: DbestudiomusicalDataSource,
  ) {
    super(Equipamento, dataSource);
  }
}
