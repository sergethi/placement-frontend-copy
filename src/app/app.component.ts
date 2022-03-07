import { Component } from '@angular/core';
// import { infoList } from './_files/info.json';
import info from "./_files/info.json";
import data from "./_files/data.json";

interface Filter {
  selectedSkills: string[];
  addSkill(talent: string): void;
  removeSkill(talent: string): void;
  clearSelectedSkills(): void;
  filterJobs(): void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Filter {
  title = 'Placement';
  infoList:{name:String, code:String}[]=info;
  listOfJobs = data;
  selectedSkills: string[];

  addSkill(talent: string): void {
    this.selectedSkills.push(talent);
    // update listOfJobs
    console.log('addSkill');
  }

  removeSkill(talent: string): void {
    this.selectedSkills = this.selectedSkills.filter(word => word !== talent)
    // update listOfJobs
    console.log('removeSkill');
  }

  clearSelectedSkills(): void {
    this.selectedSkills = [];
    console.log('clearSelectedSkills');
  }

  filterJobs() {
    console.log('filterJobs');
  }
}
