var assert = require('assert')

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

    loadRemoteFile(wrongUrl, function (err, data) {

      assert.deepEqual(result, {})
      done()

    })
  })

})


var url = require('url')
var http = require('http')

function loadRemoteFile(fileUrl, onLoaded) {
  var data = ''
  var options = url.parse(fileUrl)
  var request = http.request(options, function(res) {
    res.on('data', function(chunk) { data += chunk })
    res.on('end', function() {
      var result = JSON.parse(data);

      if(("groups" in result)){
        onLoaded(null, result)
      } else {
        onLoaded(null, {})
      }

    });
  });
  request.on('error', function(e) { onLoaded(e) })
  request.end()
}