import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycapprovalComponent } from './kycapproval.component';

describe('KycapprovalComponent', () => {
  let component: KycapprovalComponent;
  let fixture: ComponentFixture<KycapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
