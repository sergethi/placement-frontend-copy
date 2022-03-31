import { Component } from '@angular/core';
import { Jobs } from "./filter/filter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Placement';
  filtedJobs: Jobs[] = [];

  // retrieve list of filted jobs from child component
  updateJobs(newList: Jobs[]): void {
    this.filtedJobs = newList;
  }
}
