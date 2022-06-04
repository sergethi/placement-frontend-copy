import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { JobCardComponent } from './job-card/job-card.component';
import { InfoComponent } from './info/info.component';
import { TestComponent } from './test/test.component';
import { FilterComponent } from './filter/filter.component';
import { FilterListComponent } from './filter/filter-list.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { JobSkillsService } from './services/job-skills/job-skills.service';
// import { JobSkillsModel } from './models/job-skills.model';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    JobCardComponent,
    InfoComponent,
    TestComponent,
    FilterComponent,
    FilterListComponent,
    JobDescriptionComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    // JobSkillsService,
    // JobSkillsModel
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
