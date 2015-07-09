import React from 'react'
import app from 'ampersand-app'

import Page from './components/Page'
import {Loader} from './_ext-deps/Loader'
import KataGroups from './katagroups'
import RawKataData from './rawKata'

window.app = app

app.extend({

  renderPage () {
    React.render(<Page groups={this.kataGroups}/>, document.getElementById('app'))
  },

  init () {
    const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json'
    const rawKataData = new RawKataData(Loader.loadRemoteFile, url)

    // load kata data and start page
    rawKataData.load(() => {
      console.error('raw data load error')
    }, (rawKataData) => {
      this.kataGroups = KataGroups.fromRawKataData(rawKataData.groups)
      this.renderPage()
    })

    window.addEventListener('hashchange', ({newURL}) => {
      this.kataGroups.selectGroupByName(newURL.split('#group=')[1])
      this.renderPage()
    })
  }
})

app.init()