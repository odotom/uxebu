import React from 'react'
import Page from './components/Page'

import {Loader} from './_ext-deps/Loader'
import KataGroups from './katagroups'
import RawKataData from './rawKata'

const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json'

let rawKataData = new RawKataData(Loader.loadRemoteFile, url)
let kataGroups

rawKataData.load( () => {
  console.log('raw data error')
}, (rawKataData) => {
  kataGroups = KataGroups.fromRawKataData(rawKataData.groups)
  React.render(<Page groups={kataGroups} clickKata={clickKata}/>, document.getElementById('app'))
})

function clickKata (kataId) {
  console.log('Clicked')
  kataGroups.selectKataById(kataId)
  React.render(<Page groups={kataGroups} clickKata={clickKata}/>, document.getElementById('app'))
}

function urlChanged (newUrl) {
  kataGroups.selectGroupByName(newUrl.split('#group=')[1])
  React.render(<Page groups={kataGroups} clickKata={clickKata}/>, document.getElementById('app'))
}

window.addEventListener('hashchange', ({newURL}) => {urlChanged(newURL)
})