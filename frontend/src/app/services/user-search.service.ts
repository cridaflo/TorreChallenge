import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  private APIurl = ' https://search.torre.co/people/_search/?[offset=$offset&size=$size&aggregate=$aggregate]'
  constructor(
    private http: HttpClient
  ) { }

  searchUsersByName(name :string, offset: number, size: number) {
    const url = this.APIurl.replace('$offset', offset.toString()).replace('$size', size.toString());
    return this.http.post(url, {
      name: {term: name}
    });

  }
}
