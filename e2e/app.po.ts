import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageTitleText() {
    return element(by.css('ion-navbar:first-child')).getText()
   }
}
