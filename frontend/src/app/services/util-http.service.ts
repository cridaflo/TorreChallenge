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

  //Preppends server url to the specified url and performs a get request
  get(url: string, options?: any){
    return this.http.get(this.urlPrefix + url, options);
  }

  //Preppends server url to the specified url and performs a post request with specified body
  post(url: string, body: any, options?: any) {
    return this.http.post(this.urlPrefix + url, body, options);
  }
}
