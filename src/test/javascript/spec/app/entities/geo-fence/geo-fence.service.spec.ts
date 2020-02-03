import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { GeoFenceService } from 'app/entities/geo-fence/geo-fence.service';
import { IGeoFence, GeoFence } from 'app/shared/model/geo-fence.model';

describe('Service Tests', () => {
  describe('GeoFence Service', () => {
    let injector: TestBed;
    let service: GeoFenceService;
    let httpMock: HttpTestingController;
    let elemDefault: IGeoFence;
    let expectedResult: IGeoFence | IGeoFence[] | boolean | null;
    let currentDate: moment.Moment;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(GeoFenceService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new GeoFence(0, 0, 'AAAAAAA', 'AAAAAAA', 0, 'AAAAAAA', currentDate, 'AAAAAAA', 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            createdTime: currentDate.format(DATE_FORMAT)
          },
          elemDefault
        );
        service
          .find(123)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a GeoFence', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            createdTime: currentDate.format(DATE_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            createdTime: currentDate
          },
          returnedFromService
        );
        service
          .create(new GeoFence())
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp.body));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a GeoFence', () => {
        const returnedFromService = Object.assign(
          {
            fenceID: 1,
            name: 'BBBBBB',
            fencecode: 'BBBBBB',
            type: 1,
            createdBy: 'BBBBBB',
            createdTime: currentDate.format(DATE_FORMAT),
            modifiedBy: 'BBBBBB',
            modifiedTime: 'BBBBBB'
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            createdTime: currentDate
          },
          returnedFromService
        );
        service
          .update(expected)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp.body));
        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of GeoFence', () => {
        const returnedFromService = Object.assign(
          {
            fenceID: 1,
            name: 'BBBBBB',
            fencecode: 'BBBBBB',
            type: 1,
            createdBy: 'BBBBBB',
            createdTime: currentDate.format(DATE_FORMAT),
            modifiedBy: 'BBBBBB',
            modifiedTime: 'BBBBBB'
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            createdTime: currentDate
          },
          returnedFromService
        );
        service
          .query()
          .pipe(
            take(1),
            map(resp => resp.body)
          )
          .subscribe(body => (expectedResult = body));
        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a GeoFence', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
