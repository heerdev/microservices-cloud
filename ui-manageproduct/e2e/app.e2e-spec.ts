import { QauiPage } from './app.po';

describe('qaui App', function() {
  let page: QauiPage;

  beforeEach(() => {
    page = new QauiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
