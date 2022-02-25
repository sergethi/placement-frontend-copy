import { Component, OnInit } from '@angular/core';
import languages from '../_files/languages.json';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  language:{name:String}[]=languages;

  constructor() { }

  ngOnInit(): void {
  }

}
