import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {
  @Input() skills: {name: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
