import { Component, OnInit } from '@angular/core';
import { Jobs } from "../filter/filter.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  filtedJobs: Jobs[] = [];

  // retrieve list of filted jobs from child component
  updateJobs(newList: Jobs[]): void {
    this.filtedJobs = newList;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
