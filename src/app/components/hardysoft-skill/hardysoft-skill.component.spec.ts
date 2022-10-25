import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardysoftSkillComponent } from './hardysoft-skill.component';

describe('HardysoftSkillComponent', () => {
  let component: HardysoftSkillComponent;
  let fixture: ComponentFixture<HardysoftSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardysoftSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardysoftSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
