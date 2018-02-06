import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Configuration } from '../configuration';
import { DataService } from '../data.service';
import { Aadhar_verificationsComponent } from './Aadhar_verifications.component';
import {Aadhar_verificationsService} from './Aadhar_verifications.service';
describe('Aadhar_verificationsComponent', () => {
  let component: Aadhar_verificationsComponent;
  let fixture: ComponentFixture<Aadhar_verificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aadhar_verificationsComponent ],
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
providers: [Aadhar_verificationsService,DataService,Configuration]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aadhar_verificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
