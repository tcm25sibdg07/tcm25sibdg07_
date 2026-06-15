import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbestudiomusicalDataSource} from '../datasources';
import {Reserva, ReservaRelations} from '../models';

export class ReservaRepository extends DefaultCrudRepository<Reserva, typeof Reserva.prototype.id_reserva, ReservaRelations> {
  constructor(
    @inject('datasources.Dbestudiomusical') dataSource: DbestudiomusicalDataSource,
  ) {
    super(Reserva, dataSource);
  }
}