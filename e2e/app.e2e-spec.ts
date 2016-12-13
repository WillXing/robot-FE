import { RobotFEPage } from './app.po';

describe('robot-fe App', function() {
  let page: RobotFEPage;

  beforeEach(() => {
    page = new RobotFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
