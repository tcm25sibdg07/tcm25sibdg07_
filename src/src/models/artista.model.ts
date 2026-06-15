import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Artista extends Entity {
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
    type: 'string',
    required: true,
  })
  tipo_artista: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Artista>) {
    super(data);
  }
}

export interface ArtistaRelations {
  // describe navigational properties here
}

export type ArtistaWithRelations = Artista & ArtistaRelations;