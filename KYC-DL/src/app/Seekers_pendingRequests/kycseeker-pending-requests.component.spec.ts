import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycseekerPendingRequestsComponent } from './kycseeker-pending-requests.component';

describe('KycseekerPendingRequestsComponent', () => {
  let component: KycseekerPendingRequestsComponent;
  let fixture: ComponentFixture<KycseekerPendingRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycseekerPendingRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycseekerPendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
