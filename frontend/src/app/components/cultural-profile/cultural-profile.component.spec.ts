import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalProfileComponent } from './cultural-profile.component';

describe('CulturalProfileComponent', () => {
  let component: CulturalProfileComponent;
  let fixture: ComponentFixture<CulturalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
