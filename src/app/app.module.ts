import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { JobCardComponent } from './job-card/job-card.component';
import { InfoComponent } from './info/info.component';
import { TestComponent } from './test/test.component';
import { FilterComponent } from './filter/filter.component';
import { FilterListComponent } from './filter/filter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    JobCardComponent,
    InfoComponent,
    TestComponent,
    FilterComponent,
    FilterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
