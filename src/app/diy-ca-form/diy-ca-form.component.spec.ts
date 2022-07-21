import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyCaFormComponent } from './diy-ca-form.component';

describe('DiyCaFormComponent', () => {
  let component: DiyCaFormComponent;
  let fixture: ComponentFixture<DiyCaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiyCaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiyCaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
