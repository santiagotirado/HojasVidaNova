import { Injectable } from '@angular/core';
import { HeadQuarters } from './headQuarters';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()

export class HeadQuartersService {

  private url = 'http://45.55.95.110:7070/sede';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private headQuarters: HeadQuarters = new HeadQuarters();

  constructor(private http: Http) {

  }


  deleteHeadQuartes(id: number)  {
    let url = `${this.url}/delete/${id}`;
    return this.http.delete(url)
      .map(r => r.json())
      .catch(this.handleError);
  }


  getHeadQuarters(): Observable<HeadQuarters[]> {
    let url = `${this.url}/findall`;
    return this.http.get(url)
      .map(r => r.json())
      .catch(this.handleError);
  }

  getHeadQuarter(id: number): Observable<HeadQuarters> {
    const url = `${this.url}/find/${id}`;
    return this.http.get(url)
      .map(r => r.json())
      .catch(this.handleError);
  }

  getSectoresCliente(id: number ): Observable<HeadQuarters[]> {
    const url = `${this.url}/findCliente/${  id }`;
    return this.http.get(url)
      .map(r => r.json())
      .catch(this.handleError);
  }

  addHeadQuarter(headQuarters: HeadQuarters) {
    let url = `${this.url}/save`;
    let iJson = JSON.stringify(headQuarters);
    return this.http.post(url, iJson, { headers: this.headers })
      .map(r => r.json())
      .catch(this.handleError);
  }

  putHeadQuarter(headQuarters: HeadQuarters) {

    let url = `${this.url}/edit/${headQuarters.id}`;
    let iJson = JSON.stringify(headQuarters);
    return this.http.put(url, iJson, { headers: this.headers })
      .map(r => r.json())
      .catch(this.handleError);

  }

  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

    } else {

      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
