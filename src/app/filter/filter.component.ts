import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import languages from '../_files/languages.json';
import levels from '../_files/levels.json';
import types from '../_files/types.json';
import data from "./../_files/data.json";

interface Filter {
  inputValue: string;
  selectedSkills: string[];
  addSkill(event: EventTarget | null): void;
  removeSkill(talent: string): void;
  clearSelectedSkills(): void;
  filterJobs(): void;
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
  listOfJobs = data;
  inputValue = "";
  selectedSkills: string[];

  constructor() {
    this.selectedSkills = ["Java", "JavaScript", "Python", "C++"]
  }

  ngOnInit(): void {}
  unfocused(): void {
    const filterList = (<HTMLElement>document
                          .getElementsByClassName("filter-display")[0])
                          .style.display = "none";
  }
  focused(): void {
    const filterList = (<HTMLElement>document
                          .getElementsByClassName("filter-display")[0])
                          .style.display="flex";
  }
  addSkill(event: EventTarget | null): void {
    console.log('addSkill', event);
    this.selectedSkills.push(this.inputValue);
    this.inputValue = "";
    // this.filterJobs();
  }
  removeSkill(talent: string): void {
    console.log("selectedSkills: ", this.selectedSkills);
    // this.selectedSkills = ["French", "German"];
    // console.log("selectedSkills: ", this.selectedSkills);
    // console.log('removeSkill');
    // console.log("talent: ", talent);

    this.selectedSkills = this.selectedSkills
                            .filter(word => word !== talent);
    this.filterJobs();
  }
  clearSelectedSkills(): void {
    console.log('clearSelectedSkills');
    this.selectedSkills = [];
  }
  filterJobs() {
    console.log('filterJobs');
  }
  getValue(event: Event): string {
   return (event.target as HTMLInputElement).value;
  }
}