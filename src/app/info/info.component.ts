import { Component, OnInit, Input } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';
import { TestComponent } from '../test/test.component';
import data from "../_files/data.json"


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() 
  item: any;

  // item?: {
  //   id: number,
  //   company: String,
  //   logo: String,
  //   new: boolean,
  //   featured: boolean,
  //   position: String,
  //   role: String,
  //   level: String,
  //   postedAt: String,
  //   contract: String,
  //   location: String,
  //   languages: String[],
  //   tools: String[],
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
