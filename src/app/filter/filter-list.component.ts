import { Component, OnInit, Input,
         Output, EventEmitter } from '@angular/core';
         import { JobsModel } from '../models/jobs.model';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {
  @Input() selectedSkills: string[];
  @Output() selectedSkillsChange = new EventEmitter<string[]>();
  @Input() listOfJobs: JobsModel[];
  @Input() filtedJobs: JobsModel[];
  @Output() filtedJobsChange = new EventEmitter<JobsModel[]>();
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
