const app = require('../app');

test('Hello endpoint returns correct message', () => {
  const req = {};
  const res = {
    json: jest.fn()
  };
  
  app.get('/', (req, res));
  
  expect(res.json).toHaveBeenCalledWith({ message: 'Hello from Custom Build Environment!' });
});
