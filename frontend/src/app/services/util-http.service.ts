import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilHttpService {

  private urlPrefix = 'https://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  get(url: string, options?: any){
    return this.http.get(this.urlPrefix + url, options);
  }

  post(url: string, body: any, options?: any) {
    return this.http.post(this.urlPrefix + url, body, options);
  }
}
