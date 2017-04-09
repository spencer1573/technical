import { TechnicalPage } from './app.po';

describe('technical App', () => {
  let page: TechnicalPage;

  beforeEach(() => {
    page = new TechnicalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
