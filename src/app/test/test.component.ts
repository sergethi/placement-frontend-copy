import { Component, OnInit, Input } from '@angular/core';
import { Jobs } from "../filter/filter.component";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() jobs: Jobs[];
  constructor() { }

  ngOnInit(): void {
  }

}
