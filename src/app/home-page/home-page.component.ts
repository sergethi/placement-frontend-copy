import { Component, OnInit } from '@angular/core';
import { JobsModel } from '../models/jobs.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  filtedJobs: JobsModel[] = [];

  // retrieve list of filted jobs from child component
  updateJobs(newList: JobsModel[]): void {
    this.filtedJobs = newList;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
