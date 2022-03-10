import { Component, OnInit, Input } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import data from "../_files/data.json"


@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  @Input() 
  job: any;

  constructor() { }
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

  ngOnInit(): void {
  }

}
