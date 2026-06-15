import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Equipamento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  identificador: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Equipamento>) {
    super(data);
  }
}

export interface EquipamentoRelations {
  // describe navigational properties here
}

export type EquipamentoWithRelations = Equipamento & EquipamentoRelations;
