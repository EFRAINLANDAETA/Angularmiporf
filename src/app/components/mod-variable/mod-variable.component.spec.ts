import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModVariableComponent } from './mod-variable.component';

describe('ModVariableComponent', () => {
  let component: ModVariableComponent;
  let fixture: ComponentFixture<ModVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
