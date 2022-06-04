import { Component, OnInit, Input } from '@angular/core';
// import { Jobs } from '../filter/filter.component';
import { JobsModel } from '../models/jobs.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() item: JobsModel;

  constructor() { }

  ngOnInit(): void {}
}
