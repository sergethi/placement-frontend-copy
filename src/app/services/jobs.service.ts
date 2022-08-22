import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobsModel } from '../models/jobs.model';
import { environment } from 'src/environments/environment';
// const getJobs = 'http://localhost:3005/jobs';
const getJobs = environment.baseUrl + "/jobs";
@Injectable({
  providedIn: 'root'
})

export class JobsService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<JobsModel[]> {
    return this.http.get<JobsModel[]>(getJobs); 
  }

  jobs: JobsModel[];
  currentJobId: number = 1;

  getCurrentJob(jobId: number): Observable<JobsModel> {
    const  getJob = getJobs.concat('/', jobId.toString());
    return this.http.get<JobsModel>(getJob);
}

}
