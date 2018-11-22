import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('http://wmsi004526/TreservaWeb_MAIN_TEST_SQL/Areas/Desktop/#/Login');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
