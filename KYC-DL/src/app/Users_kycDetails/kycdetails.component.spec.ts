import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycdetailsComponent } from './kycdetails.component';

describe('KycdetailsComponent', () => {
  let component: KycdetailsComponent;
  let fixture: ComponentFixture<KycdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
