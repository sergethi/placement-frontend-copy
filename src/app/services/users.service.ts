import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersModel } from '../models/users.model';
const getUsers = 'http://localhost:3005/users';
const addUser = 'http://localhost:3005/signup';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
    constructor(private http: HttpClient) { }
  getAll(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(getUsers);
  }

  addUser(user: UsersModel): void {
    this.http.post<UsersModel>(addUser, user);
    console.log("A new user has been added");
  }
}