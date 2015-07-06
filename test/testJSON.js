import  assert from 'assert'
import {loadRemoteFile as loadRemoteFile} from '../src/loadRemoteFile'

describe ('loading JSON from server', function () {

  it ('file does exist', function (done) {
    //arrange
    var validUrl = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json'

    // act

    loadRemoteFile(validUrl, function(err, result) {

      assert.equal(err, null)
      //assert.equal(result.substr(0,13), "{\n  \"groups\":" )

      done()

    })
  })

  it ('file does NOT exist', function (done) {
    //arrange
    var wrongUrl = 'http://katas.tddbin.com/katas/es6/language/__all__.json'

    // act

    loadRemoteFile(wrongUrl, function (err, result) {

      // assert
      assert.equal(err, null);
      //assert.equal(result.substr(0,13),"{\n  \"groups\":");
      assert.deepEqual(result, {});
      done();

    })
  })

})


