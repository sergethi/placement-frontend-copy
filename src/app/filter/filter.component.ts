import { Component, OnInit } from '@angular/core';
import languages from '../_files/languages.json';
import levels from '../_files/levels.json';
import types from '../_files/types.json';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  language = languages;
  level = levels;
  type = types;
  selected: {name: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
