import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabBarrasComponent } from './cab-barras.component';

describe('CabBarrasComponent', () => {
  let component: CabBarrasComponent;
  let fixture: ComponentFixture<CabBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabBarrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
