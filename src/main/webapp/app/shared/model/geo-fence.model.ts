import { Moment } from 'moment';

export interface IGeoFence {
  id?: number;
  fenceID?: number;
  name?: string;
  fencecode?: string;
  type?: number;
  createdBy?: string;
  createdTime?: Moment;
  modifiedBy?: string;
  modifiedTime?: string;
}

export class GeoFence implements IGeoFence {
  constructor(
    public id?: number,
    public fenceID?: number,
    public name?: string,
    public fencecode?: string,
    public type?: number,
    public createdBy?: string,
    public createdTime?: Moment,
    public modifiedBy?: string,
    public modifiedTime?: string
  ) {}
}
