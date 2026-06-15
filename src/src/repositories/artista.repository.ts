import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbestudiomusicalDataSource} from '../datasources';
import {Artista, ArtistaRelations} from '../models';

export class ArtistaRepository extends DefaultCrudRepository<Artista, typeof Artista.prototype.numero, ArtistaRelations> {
  constructor(
    @inject('datasources.Dbestudiomusical') dataSource: DbestudiomusicalDataSource,
  ) {
    super(Artista, dataSource);
  }
}