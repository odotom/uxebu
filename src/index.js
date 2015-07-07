import React from 'react'
import Page from './components/Page'

import {Loader} from './_ext-deps/Loader'
import KataGroups from './katagroups'
import RawKataData from './rawKata'

const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json'

let rawKataData = new RawKataData(Loader.loadRemoteFile, url)

rawKataData.load( () => {
  console.log('raw data error')
}, (rawKataData) => {
  let kataGroups = KataGroups.fromRawKataData(rawKataData.groups)
  React.render(<Page groups={kataGroups} />, document.getElementById('app'))
})


