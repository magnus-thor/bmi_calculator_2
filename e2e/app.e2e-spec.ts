import { by, browser, element } from 'protractor'

describe('App', () => {

  describe('default screen', () => {
    beforeEach(() => {
      browser.get('/');
    });

    it('App should have a title', () => {
      expect(browser.getTitle()).toContain('Ionic App')
    });

    it('the about tab is displayed by default', () => {
      expect(element(by.css('[aria-selected=true]'))
        .getAttribute('innerHTML'))
        .toContain('Calculator');
    });

    it('should have a title saying Calculator', () => {
      expect(element(by.css('ion-navbar:first-child'))
        .getAttribute('innerHTML'))
        .toContain('Calculator');
    });

    it('Should have a Calculator Tab', () => {
      expect(element(by.css('[aria-controls="tabpanel-t0-0"]'))
        .getAttribute('innerHTML'))
        .toContain('Calculator');
    })
  });


});
