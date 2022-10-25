import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModIdiomasComponent } from './mod-idiomas.component';

describe('ModIdiomasComponent', () => {
  let component: ModIdiomasComponent;
  let fixture: ComponentFixture<ModIdiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModIdiomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
