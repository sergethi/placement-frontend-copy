import { Component, OnInit, Input } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { JobsModel } from '../models/jobs.model';


@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  @Input() jobs?: JobsModel[];
 
  constructor(private jobsService: JobsService ) {}

  retrieveJobs(): void {
    this.jobsService.getAll()
      .subscribe({
        next: (data) => {
          this.jobs = data;
        },
        error: (e) => console.error(e)
      });
  }
  ngOnInit(): void {
    this.retrieveJobs();
  }
}
