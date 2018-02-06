import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsForVerifierComponent } from './requests-for-verifier.component';

describe('RequestsForVerifierComponent', () => {
  let component: RequestsForVerifierComponent;
  let fixture: ComponentFixture<RequestsForVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsForVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsForVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
