import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierProfileComponent } from './verifier-profile.component';

describe('VerifierProfileComponent', () => {
  let component: VerifierProfileComponent;
  let fixture: ComponentFixture<VerifierProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifierProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifierProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
