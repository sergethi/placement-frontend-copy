import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import languages from '../_files/languages.json';
import levels from '../_files/levels.json';
import types from '../_files/types.json';
import data from "./../_files/data.json";

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
  clickSkill(talent: string): void;
  addSkill(event: EventTarget | null): void;
  clearSelectedSkills(): void;
  jobFilter(): void;
  getValue(event: Event): string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, Filter {
  language = languages;
  level = levels;
  typa = types;
  listOfJobs: Jobs[] = data;
  filtedJobs: Jobs[] = [];
  @Output() filtedJobsChange = new EventEmitter<Jobs[]>();
  selectedSkills: string[];
  inputValue: string = "";

  // pre-select skills and filter jobs
  ngOnInit(): void {
    this.selectedSkills = ["HTML", "CSS", "Python"];
    this.jobFilter();
  }
  // hides the dropdown
  unfocused(): void {
    const filterList = (<HTMLElement>document
                          .getElementsByClassName("filter-display")[0])
                          .style.display = "none";
  }
  // show the dropdown
  focused(): void {
    const filterList = (<HTMLElement>document
                          .getElementsByClassName("filter-display")[0])
                          .style.display = "flex";
  }
  // add skill by clicking on the dropdown
  clickSkill(talent: string): void {
    this.inputValue = talent;
    this.addSkill();
  }
  // add skill by typing in the input field
  addSkill(): void {
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
      const { position, role, level, languages, tools } = obj;
      const concat = `${position} ${role} ${level} ` +
                     `${languages.join(' ')} ${tools.join(' ')}`;
      const str = concat.toLowerCase();
      for (let skill of this.selectedSkills) {
        if (str.includes(skill.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
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
}