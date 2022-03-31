import { Component, OnInit, Input } from '@angular/core';
import { Jobs } from '../filter/filter.component';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  @Input() job: Jobs;

  constructor() { }

  ngOnInit(): void {
  }

}
