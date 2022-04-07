import { Component, OnInit , Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import languages from './../_files/languages.json';
import levels from './../_files/levels.json';
import contracts from './../_files/contracts.json';
import data from './../_files/data.json';

export interface Jobs {
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
  languages: String[];
  tools: String[];
}

interface Filter {
  listOfJobs: Jobs[];
  filtedJobs: Jobs[];
  selectedSkills: string[];
  inputValue: string;
  addSkill(skill: string): void;
  clearSelectedSkills(): void;
  jobFilter(): void;
  getValue(event: Event): string;
  onEnter(): void;
  onLeave(): void;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, Filter {
  language = languages;
  level = levels;
  contracts = contracts;
  listOfJobs: Jobs[] = data;
  filtedJobs: Jobs[] = [];
  @Output() filtedJobsChange = new EventEmitter<Jobs[]>();
  selectedSkills: string[];
  inputValue: string = "";
  isHovering = false;

  // pre-select skills and filter jobs
  ngOnInit(): void {
    this.selectedSkills = [];
    this.jobFilter();
  }
  // add skill to filter to get the jobs with same skill
  addSkill(skill: string): void {
    this.inputValue = skill;
    if (this.selectedSkills.includes(this.inputValue)) return;
    this.selectedSkills.push(this.inputValue);
    this.inputValue = "";
    this.jobFilter();
  }
  // remove all the selected skills by clicking clear all
  clearSelectedSkills(): void {
    this.selectedSkills = [];
    this.jobFilter();
  }
  // check if user seleted a skill and display all job if not
  // filter the list of jobs by the skill selected
  jobFilter(): void {
    if (this.selectedSkills.length < 1) {
      this.filtedJobs = this.listOfJobs;
      this.filtedJobsChange.emit(this.filtedJobs);
      return;
    }
    this.filtedJobs = this.listOfJobs.filter((obj) => {
      const { position, role, level, contract, languages, tools } = obj;
      const concat = `${position} ${role} ${level} ${contract}` +
                     `${languages.join(' ')} ${tools.join(' ')}`;
      const str = concat.toLowerCase();
      for (let skill of this.selectedSkills) {
        if (str.includes(skill.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
    if (this.filtedJobs.length < 1) {
      this.filtedJobs = this.listOfJobs;
    }
    this.filtedJobsChange.emit(this.filtedJobs);
  }
  // send list of job to the parent component (app.component)
  updateJobs(newList: Jobs[]): void {
    this.filtedJobs = newList;
    this.filtedJobsChange.emit(this.filtedJobs);
  }
  // retrieve the value from the input field
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  // display dropdown and create space to counter the position: absolute
  onEnter(): void {
    this.isHovering = true;
    (<HTMLElement>document
      .getElementsByClassName("filter-space")[0])
      .style.display = "block";
  }
  // remove dropdown and the extra space
  onLeave(): void {
    this.isHovering = false;
    (<HTMLElement>document
      .getElementsByClassName("filter-space")[0])
      .style.display = "none";
  }

  // @ViewChild('myMenu') myMenu;

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid')
  ]);
}