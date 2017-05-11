import { TestFrontendTunaikuAngularPage } from './app.po';

describe('test-frontend-tunaiku-angular App', () => {
  let page: TestFrontendTunaikuAngularPage;

  beforeEach(() => {
    page = new TestFrontendTunaikuAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
