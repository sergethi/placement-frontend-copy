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
  selectedSkills: string[];
  inputValue: string = "";

  ngOnInit(): void {
    this.selectedSkills = ["Java", "JavaScript", "Python", "C++"];
  }
  unfocused(): void {
    const filterList = (<HTMLElement>document
                          .getElementsByClassName("filter-display")[0])
                          .style.display = "none";
  }
  focused(): void {
    const filterList = (<HTMLElement>document
                          .getElementsByClassName("filter-display")[0])
                          .style.display = "flex";
  }
  clickSkill(talent: string): void {
    this.inputValue = talent;
    this.addSkill();
  }
  addSkill(): void {
    this.selectedSkills.push(this.inputValue);
    this.inputValue = "";
    this.jobFilter();
  }
  clearSelectedSkills(): void {
    this.selectedSkills = [];
    this.jobFilter();
  }
  jobFilter(): void {
    if (this.selectedSkills.length < 1) {
      this.filtedJobs = this.listOfJobs;
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
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}