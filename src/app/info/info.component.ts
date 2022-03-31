import { Component, OnInit, Input } from '@angular/core';
import { Jobs } from '../filter/filter.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() item: Jobs;

  constructor() { }

  ngOnInit(): void {}
}
