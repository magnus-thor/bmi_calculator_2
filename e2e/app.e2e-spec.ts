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
        .toContain('About');

    });

    it('should have a title saying About', () => {
      expect(element(by.css('ion-navbar:first-child'))
        .getAttribute('innerHTML'))
        .toContain('About');
    });
  });
});
