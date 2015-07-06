var assert = require('assert')
describe('Check if mocha env works', function() {
  it('should be equal', function() {
    assert.equal(1, 1)
  })
  it('should not be equal', function() {
    assert.notEqual(1, 2)
  })
});