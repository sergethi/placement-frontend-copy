import { Component, OnInit, Input } from '@angular/core';
import { JobsModel } from '../models/jobs.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() jobs: JobsModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
