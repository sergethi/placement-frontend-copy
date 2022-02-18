import { Component } from '@angular/core';
// import { infoList } from './_files/info.json';
import info from "./_files/info.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Placement';
  infoList:{name:String, code:String}[]=info;
}
