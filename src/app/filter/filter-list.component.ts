import { Component, OnInit, Input,
         Output, EventEmitter } from '@angular/core';
import { Jobs } from './filter.component';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {
  @Input() selectedSkills: string[];
  @Output() selectedSkillsChange = new EventEmitter<string[]>();
  @Input() listOfJobs: Jobs[];
  @Input() filtedJobs: Jobs[];
  @Output() filtedJobsChange = new EventEmitter<Jobs[]>();
  @Input() jobFilter: () => void;

  ngOnInit(): void {}
  // remove skill by clicking the X button
  removeSkill(talent: string): void {
    this.selectedSkills = this.selectedSkills
                            .filter(word => word !== talent);
    this.selectedSkillsChange.emit(this.selectedSkills);
    this.jobFilter();
    this.filtedJobsChange.emit(this.filtedJobs);
  }
}
