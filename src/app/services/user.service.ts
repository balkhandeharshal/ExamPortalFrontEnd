import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //add user
  public addUser(user: any) {
    // Use backticks for template literals
    return this.http.post(`${baseUrl}/user/`, user);
    

  }

}
