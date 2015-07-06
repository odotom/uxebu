import  assert from 'assert'
import {loadRemoteFile as loadRemoteFile} from '../src/JSONLoader'

describe ('loading JSON from server', function () {
  const urlPath = 'http://katas.tddbin.com/katas/es6/language/'

  it ('file does exist', function (done) {
    //arrange
    const validUrl = `${urlPath}__grouped__.json`

    // act

    loadRemoteFile(validUrl, function(err, result) {

      assert.equal(err, null)
      //assert.equal(result.substr(0,13), "{\n  \"groups\":" )

      done()

    })
  })

  it ('file does NOT exist', function (done) {
    //arrange
    const wrongUrl = `${urlPath}__all__.json`

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


