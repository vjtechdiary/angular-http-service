import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public getUserprofile() {
    return this.http.get('assets/userinfo/userinfo.json');
  }
}
