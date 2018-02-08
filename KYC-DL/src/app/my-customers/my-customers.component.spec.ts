import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomersComponent } from './my-customers.component';

describe('MyCustomersComponent', () => {
  let component: MyCustomersComponent;
  let fixture: ComponentFixture<MyCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
