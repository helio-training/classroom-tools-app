import { ClassroomToolsAppPage } from './app.po';

describe('classroom-tools-app App', function() {
  let page: ClassroomToolsAppPage;

  beforeEach(() => {
    page = new ClassroomToolsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
