describe('API tests', () => {
  it('GET /api/countries', (done) => {
    api.get('/api/countries').expect(200, done);
  });
});
