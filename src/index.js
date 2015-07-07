import React from 'react'
import NavKataGroups from './components/KataGroups'
import KataItems from './components/KataItems'
import KataDescription from './components/KataDescription'

class Page extends React.Component {

  render () {
    const {groups} = this.props.groups

    return (
      <div id="layout" className="content pure-g">
        <NavKataGroups groups={groups}></NavKataGroups>
        <KataItems group={groups[0]}></KataItems>
        <KataDescription item={groups[0].katas[0]}></KataDescription>
      </div>
    )
  }

}


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


