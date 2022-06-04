import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillsModel } from '../models/skills.model';
const baseUrl = 'http://localhost:3005/skills';
@Injectable({
  providedIn: 'root'
})

export class SkillsService {
    constructor(private http: HttpClient) { }
  getAll(): Observable<SkillsModel[]> {
    return this.http.get<SkillsModel[]>(baseUrl);
  }
}