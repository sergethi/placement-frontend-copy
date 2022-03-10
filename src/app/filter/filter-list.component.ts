import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {
  @Input() selectedSkills: string[];
  @Input() deleteSkill: (talent: string) => void;

  constructor() { }

  ngOnInit(): void {
  }

}
