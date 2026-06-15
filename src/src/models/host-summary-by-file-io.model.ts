import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'sys', table: 'host_summary_by_file_io'}}
})
export class HostSummaryByFileIo extends Entity {
  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    generated: false,
    mysql: {columnName: 'host', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  host?: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 42,
    scale: 0,
    generated: false,
    mysql: {columnName: 'ios', dataType: 'decimal', dataLength: null, dataPrecision: 42, dataScale: 0, nullable: 'Y', generated: false},
  })
  ios?: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 11,
    generated: false,
    mysql: {columnName: 'io_latency', dataType: 'varchar', dataLength: 11, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false},
  })
  ioLatency?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HostSummaryByFileIo>) {
    super(data);
  }
}

export interface HostSummaryByFileIoRelations {
  // describe navigational properties here
}

export type HostSummaryByFileIoWithRelations = HostSummaryByFileIo & HostSummaryByFileIoRelations;
