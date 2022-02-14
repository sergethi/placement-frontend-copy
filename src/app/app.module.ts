import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { JobCardComponent } from './job-card/job-card.component';
import { InfoComponent } from './info/info.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    JobCardComponent,
    InfoComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
