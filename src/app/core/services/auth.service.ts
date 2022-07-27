import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = '';
  constructor(
    private httpClient: HttpClient,
    @Inject('API_BASE_URL') apiBaseUrl: string
  ) {
    this.baseUrl = apiBaseUrl;
  }

  getAllMenu() {
    let url_ = this.baseUrl + '/Common/GetMenuSkote';
    url_ = url_.replace(/[?&]$/, '');
    let options_: any = {
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
    };
    return this.httpClient.request('get', url_, options_).pipe(
      map<any, any>((resp) => {
        return resp['body'];
      })
    );
  }

  requestLogin(loginForm: any) {
    let url_ = this.baseUrl + '/Auth/Login';
    let options_: any = {
      body: JSON.stringify(loginForm),
      observe: 'response',
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient
      .request('post', url_, options_)
      .pipe(map<any, any>((res) => res['body']));
  }
}
