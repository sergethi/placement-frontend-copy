import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { JobsModel } from '../models/jobs.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() item: JobsModel;

  constructor(private route:Router) { }

  navigateToJob() {
    console.log(this.item);
    this.route.navigate(['/job-description']);
  }

  ngOnInit(): void {}
}
