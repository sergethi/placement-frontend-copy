import { Component, OnInit, Input} from '@angular/core';
import data from './../_files/data.json';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {
  @Input() jobDetail: any = data;
  @Input() jobId: number = 1;
  @Input() job: object = this.jobDetail[this.jobId]

  constructor() { }

  ngOnInit(): void {
  }
}
