import { AnguarAppPage } from './app.po';

describe('anguar-app App', () => {
  let page: AnguarAppPage;

  beforeEach(() => {
    page = new AnguarAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
