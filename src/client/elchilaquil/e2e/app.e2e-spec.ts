import { ElchilaquilPage } from './app.po';

describe('elchilaquil App', () => {
  let page: ElchilaquilPage;

  beforeEach(() => {
    page = new ElchilaquilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
