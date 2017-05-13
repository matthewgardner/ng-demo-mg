import { NgDemoMgPage } from './app.po';

describe('ng-demo-mg App', () => {
  let page: NgDemoMgPage;

  beforeEach(() => {
    page = new NgDemoMgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
