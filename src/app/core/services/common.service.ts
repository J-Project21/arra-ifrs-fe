import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(
    private httpClient: HttpClient,
    @Inject('API_BASE_URL') apiBaseUrl: string
  ) {}
}
