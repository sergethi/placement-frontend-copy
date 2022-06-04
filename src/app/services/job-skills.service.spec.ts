import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSkillsService } from './job-skills.service';

describe('JobSkillsService', () => {
  let component: JobSkillsService;
  let fixture: ComponentFixture<JobSkillsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSkillsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSkillsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
