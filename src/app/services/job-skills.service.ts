import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobSkillsModel } from '../models/job-skills.model';
const baseUrl = 'http://localhost:3005/jobskills';
@Injectable({
  providedIn: 'root'
})

export class JobSkillsService {
    constructor(private http: HttpClient) { }
  getAll(): Observable<JobSkillsModel[]> {
    return this.http.get<JobSkillsModel[]>(baseUrl);
  }
}