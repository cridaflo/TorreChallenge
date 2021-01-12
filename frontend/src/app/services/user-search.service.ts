import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  private APIurl = ' https://search.torre.co/people/_search/?offset=$offset&size=$size&aggregate=false'
  constructor(
    private http: HttpClient
  ) { }

  //Performs a paginated user search by name
  searchUsersByName(name :string, offset: number, size: number) {
    const url = this.APIurl.replace('$offset', offset.toString()).replace('$size', size.toString());
    const body: any = {};
    if(name) {
      body.name = {term: name};
    }
    return this.http.post(url, body);

  }
}
