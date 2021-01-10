import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDynamicsSelectorComponent } from './professional-dynamics-selector.component';

describe('ProfessionalDynamicsSelectorComponent', () => {
  let component: ProfessionalDynamicsSelectorComponent;
  let fixture: ComponentFixture<ProfessionalDynamicsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalDynamicsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalDynamicsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
