import { Injectable } from '@angular/core';
import { GeneralData } from './generalData';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()

export class GeneralDataService {

  private url = 'http://45.55.95.110:7070/clientes';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private generalData: GeneralData = new GeneralData();

  constructor(private http: Http) {

  }


  deleteGeneralData(id: number) {
    const url = `${this.url}/delete/${id}`;
    return this.http.delete(url)
      .map(r => r.json())
      .catch(this.handleError);
  }


  getGeneralDatas(): Observable<GeneralData[]> {
    const url = `${this.url}/findAll`;
    return this.http.get(url)
      .map(r => r.json())
      .catch(this.handleError);
  }

  getGeneralData(id: number): Observable<GeneralData> {
    const url = `${this.url}/find/${id}`;
    return this.http.get(url)
      .map(r => r.json())
      .catch(this.handleError);
  }

    consultarClienteCodigoSap(generalData: GeneralData) {
    const url = `${this.url}/consultarSap`;
    const iJson = JSON.stringify(generalData);
    return this.http.post(url, iJson, { headers: this.headers })
      .map(r => r.json())
      .catch(this.handleError);

    }

  addGeneralData(generalData: GeneralData) {
    const url = `${this.url}/save`;
    const iJson = JSON.stringify(generalData);
    return this.http.post(url, iJson, { headers: this.headers })
      .map(r => r.json())
      .catch(this.handleError);
  }

  putGeneralData(generalData: GeneralData) {

    const url = `${this.url}/edit/${generalData.codigosap}`;
    const iJson = JSON.stringify(generalData);
    return this.http.put(url, iJson, { headers: this.headers })
      .map(r => r.json())
      .catch(this.handleError);

  }

  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

    } else {

      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
