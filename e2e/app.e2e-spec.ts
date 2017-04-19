import { TutpointPage } from './app.po';

describe('tutpoint App', () => {
  let page: TutpointPage;

  beforeEach(() => {
    page = new TutpointPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
