import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FormService {
  private baseUrl: string;
  constructor(
    private httpClient: HttpClient,
    @Inject('API_BASE_URL') apiBaseUrl: string
  ) {
    this.baseUrl = apiBaseUrl + '/form/';
  }

  getFormInfo(code: string) {
    let _url = this.baseUrl + 'GetFormInfo/' + code;
    return this.httpClient.get(_url);
  }

  getData(code: string, command: any) {
    let _url = this.baseUrl + 'GetData/' + code;

    let content_: any = {
      start: command.pageIndex,
      pageSize: command.pageSize,
      sort: command.sort,
      filter: command.filter,
    };

    const options: any = {
      body: content_,
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient
      .request('post', _url, options)
      .pipe(map((res: any) => res['body']));
  }
}
