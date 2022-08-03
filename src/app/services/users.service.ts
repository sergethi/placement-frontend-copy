import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersModel } from '../models/users.model';
const getUsersURL = 'http://localhost:3005/users';
const addUserURL = 'http://localhost:3005/signup';
const logUserURL = 'http://localhost:3005/login';
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  isLoggedIn: boolean = true;
  currentUserId: number = 0;
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(getUsersURL);
  }

  addUser(user: UsersModel[]): Observable<UsersModel[]> {
     return this.http.post<UsersModel[]>(addUserURL, user);
  }

  logUser(user: UsersModel[]): Observable<UsersModel[]> {

    return this.http.post<UsersModel[]>(logUserURL, user);
  }
}