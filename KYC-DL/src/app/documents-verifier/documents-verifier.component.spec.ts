import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsVerifierComponent } from './documents-verifier.component';

describe('DocumentsVerifierComponent', () => {
  let component: DocumentsVerifierComponent;
  let fixture: ComponentFixture<DocumentsVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
