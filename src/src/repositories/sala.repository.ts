import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbestudiomusicalDataSource} from '../datasources';
import {Sala, SalaRelations} from '../models';

export class SalaRepository extends DefaultCrudRepository<Sala, typeof Sala.prototype.numero, SalaRelations> {
  constructor(
    @inject('datasources.Dbestudiomusical') dataSource: DbestudiomusicalDataSource,
  ) {
    super(Sala, dataSource);
  }
}