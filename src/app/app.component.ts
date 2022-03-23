import { Component } from '@angular/core';
import data from "./_files/data.json";
import { Jobs } from "./filter/filter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Placement';
  jobsData: { 
    id: number, 
    company: String, 
    logo: String, 
    new: boolean, 
    featured: boolean, 
    position: String,
    role: String,
    level: String,
    postedAt: String,
    contract: String,
    location: String,
    languages: String[],
    tools: String[] 
  }[] = data;
  filtedJobs: Jobs[] = [];

  updateJobs(newList: Jobs[]): void {
    this.filtedJobs = newList;
  }
}

// https://github.com/cesarsnina/placement