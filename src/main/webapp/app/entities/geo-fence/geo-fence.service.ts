import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IGeoFence } from 'app/shared/model/geo-fence.model';

type EntityResponseType = HttpResponse<IGeoFence>;
type EntityArrayResponseType = HttpResponse<IGeoFence[]>;

@Injectable({ providedIn: 'root' })
export class GeoFenceService {
  public resourceUrl = SERVER_API_URL + 'api/geo-fences';

  constructor(protected http: HttpClient) {}

  create(geoFence: IGeoFence): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(geoFence);
    return this.http
      .post<IGeoFence>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(geoFence: IGeoFence): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(geoFence);
    return this.http
      .put<IGeoFence>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IGeoFence>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IGeoFence[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(geoFence: IGeoFence): IGeoFence {
    const copy: IGeoFence = Object.assign({}, geoFence, {
      createdTime: geoFence.createdTime && geoFence.createdTime.isValid() ? geoFence.createdTime.format(DATE_FORMAT) : undefined
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.createdTime = res.body.createdTime ? moment(res.body.createdTime) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((geoFence: IGeoFence) => {
        geoFence.createdTime = geoFence.createdTime ? moment(geoFence.createdTime) : undefined;
      });
    }
    return res;
  }
}
