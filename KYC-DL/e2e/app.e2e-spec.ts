import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for KYC-DL', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be KYC-DL', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('KYC-DL');
    })
  });

  it('navbar-brand should be kyc-dl@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('kyc-dl@0.0.1');
  });

  
    it('KYC_Details component should be loadable',() => {
      page.navigateTo('/KYC_Details');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('KYC_Details');
    });

    it('KYC_Details table should have 6 columns',() => {
      page.navigateTo('/KYC_Details');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  
    it('SharingAsset component should be loadable',() => {
      page.navigateTo('/SharingAsset');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('SharingAsset');
    });

    it('SharingAsset table should have 5 columns',() => {
      page.navigateTo('/SharingAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  
    it('Kyc_Seekers_Requests component should be loadable',() => {
      page.navigateTo('/Kyc_Seekers_Requests');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Kyc_Seekers_Requests');
    });

    it('Kyc_Seekers_Requests table should have 6 columns',() => {
      page.navigateTo('/Kyc_Seekers_Requests');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  
    it('Aadhar_verifications component should be loadable',() => {
      page.navigateTo('/Aadhar_verifications');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Aadhar_verifications');
    });

    it('Aadhar_verifications table should have 6 columns',() => {
      page.navigateTo('/Aadhar_verifications');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  
    it('Passport_verifications component should be loadable',() => {
      page.navigateTo('/Passport_verifications');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Passport_verifications');
    });

    it('Passport_verifications table should have 6 columns',() => {
      page.navigateTo('/Passport_verifications');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });

  

});
