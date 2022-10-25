import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabModuloComponent } from './cab-modulo.component';

describe('CabModuloComponent', () => {
  let component: CabModuloComponent;
  let fixture: ComponentFixture<CabModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabModuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
