import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBarrasComponent } from './mod-barras.component';

describe('ModBarrasComponent', () => {
  let component: ModBarrasComponent;
  let fixture: ComponentFixture<ModBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModBarrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
