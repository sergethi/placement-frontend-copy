import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { JobsService } from '../services/jobs.service';
// import { JobsModel } from '../models/jobs.model';

interface Animal {
  name: string;
  sound: string;
}

[
  {
      "id": 1,
      "company": "Photosnap",
      "logo": "./assets/images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "createdAt": "2022-06-08T07:40:04.839Z",
      "updatedAt": "2022-06-08T07:40:04.839Z",
      "UserId": 5,
      "Skills": [
          {
              "id": 13,
              "name": "HTML",
              "JobSkill": {
                  "JobId": 1,
                  "SkillId": 13
              }
          }
      ]
  },
]
export interface JobsModel {
  id: number;
  company: String;
  logo: String;
  new: boolean;
  featured: boolean;
  position: String;
  role: String;
  level: String;
  postedAt: String;
  contract: String;
  location: String;
  createdAt: string;
  updatedAt: string;
  UserId: number
  Skills: {
    id: number;
    name: string;
    JobSkill: {
      JobId: number;
      SkillId: number; };
  }[];
}


@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  @Input() jobs?: JobsModel[];

  animalControl = new FormControl(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  constructor(
    private jobsService: JobsService 
    ) {}
  
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
