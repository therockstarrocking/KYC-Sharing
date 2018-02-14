import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycsharedComponent } from './kycshared.component';

describe('KycsharedComponent', () => {
  let component: KycsharedComponent;
  let fixture: ComponentFixture<KycsharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycsharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycsharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
