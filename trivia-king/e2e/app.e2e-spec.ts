import { TriviaKingPage } from './app.po';

describe('trivia-king App', () => {
  let page: TriviaKingPage;

  beforeEach(() => {
    page = new TriviaKingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('trk works!');
  });
});
