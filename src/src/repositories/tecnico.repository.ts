import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbestudiomusicalDataSource} from '../datasources';
import {Tecnico, TecnicoRelations} from '../models';

export class TecnicoRepository extends DefaultCrudRepository<Tecnico, typeof Tecnico.prototype.numero, TecnicoRelations> {
  constructor(
    @inject('datasources.Dbestudiomusical') dataSource: DbestudiomusicalDataSource,
  ) {
    super(Tecnico, dataSource);
  }
}