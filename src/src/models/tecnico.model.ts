import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Tecnico extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  numero: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  numero_sala: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tecnico>) {
    super(data);
  }
}

export interface TecnicoRelations {
  // describe navigational properties here
}

export type TecnicoWithRelations = Tecnico & TecnicoRelations;