import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobsModel } from '../models/jobs.model';
const baseUrl = 'http://localhost:3005/jobs';
@Injectable({
  providedIn: 'root'
})

export class JobsService {
    constructor(private http: HttpClient) { }
  getAll(): Observable<JobsModel[]> {
    return this.http.get<JobsModel[]>(baseUrl);
  }
}
