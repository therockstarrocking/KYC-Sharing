import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Configuration } from '../configuration';
import { DataService } from '../data.service';
import { Kyc_Seekers_RequestsComponent } from './Kyc_Seekers_Requests.component';
import {Kyc_Seekers_RequestsService} from './Kyc_Seekers_Requests.service';
describe('Kyc_Seekers_RequestsComponent', () => {
  let component: Kyc_Seekers_RequestsComponent;
  let fixture: ComponentFixture<Kyc_Seekers_RequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kyc_Seekers_RequestsComponent ],
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
providers: [Kyc_Seekers_RequestsService,DataService,Configuration]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kyc_Seekers_RequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
