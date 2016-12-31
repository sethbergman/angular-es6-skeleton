import HomeController from './home.controller';

describe('Home', () => {
  describe('HomeController', () => {
    it('should return some content', () => {
      const expected = 'Test Content...';
      const MockService = {
        getContent() {
          return expected;
        },
      };
      expect(HomeController.resolve.content(MockService)).to.equal(expected);
    });
  });
});
