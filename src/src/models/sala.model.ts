import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Sala extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  numero: number;

  @property({
    type: 'number',
    required: true,
  })
  numero_maximo: number;

  @property({
    type: 'number',
    required: true,
  })
  preco: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sala>) {
    super(data);
  }
}

export interface SalaRelations {
  // describe navigational properties here
}

export type SalaWithRelations = Sala & SalaRelations;