import url from 'url'
import http from 'http'

export default class JSONLoader {

  static loadRemoteFile(fileUrl, onLoaded) {
    let data = ''
    let options = url.parse(fileUrl)

    options.withCredentials = false  //suppress CORS

    const request = http.request(options, function (res) {
      res.on('data', function (chunk) {
        data += chunk
      })
      res.on('end', function () {
        onLoaded(null, data)
      })

    })
    request.on('error', function (e) {
      onLoaded(e)
    })
    request.end()
  }

}