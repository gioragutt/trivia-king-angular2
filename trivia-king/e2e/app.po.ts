import { browser, element, by } from 'protractor';

export class TriviaKingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('trk-root h1')).getText();
  }
}
