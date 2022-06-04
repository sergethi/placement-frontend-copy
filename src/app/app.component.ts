import { Component } from '@angular/core';
// import { Jobs } from "./filter/filter.component";
import { JobsModel } from './models/jobs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Placement';
  filtedJobs: JobsModel[] = [];

  // retrieve list of filted jobs from child component
  updateJobs(newList: JobsModel[]): void {
    this.filtedJobs = newList;
  }
}
