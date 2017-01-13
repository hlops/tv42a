import { Tv42aPage } from './app.po';

describe('tv42a App', function() {
  let page: Tv42aPage;

  beforeEach(() => {
    page = new Tv42aPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
