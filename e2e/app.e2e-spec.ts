import { Week2t3Page } from './app.po';

describe('week2t3 App', function() {
  let page: Week2t3Page;

  beforeEach(() => {
    page = new Week2t3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
