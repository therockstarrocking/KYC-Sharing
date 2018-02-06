import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Configuration } from '../configuration';
import { DataService } from '../data.service';
import { Passport_verificationsComponent } from './Passport_verifications.component';
import {Passport_verificationsService} from './Passport_verifications.service';
describe('Passport_verificationsComponent', () => {
  let component: Passport_verificationsComponent;
  let fixture: ComponentFixture<Passport_verificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Passport_verificationsComponent ],
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
providers: [Passport_verificationsService,DataService,Configuration]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Passport_verificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
