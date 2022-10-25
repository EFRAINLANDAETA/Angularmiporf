import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModProyectosComponent } from './mod-proyectos.component';

describe('ModProyectosComponent', () => {
  let component: ModProyectosComponent;
  let fixture: ComponentFixture<ModProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
