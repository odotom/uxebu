import React from 'react'
import NavKataGroups from './components/NavKataGroups'
import KataItems from './components/KataItems'
import KataDescription from './components/KataDescription'

class Page extends React.Component {

  render () {
    const {groups} = this.props
    const groupNames = Object.keys(groups)

    return (
      <div id="layout" className="content pure-g">
        <NavKataGroups groups={groups}></NavKataGroups>
        <KataItems group={groups[groupNames[0]]}></KataItems>
        <KataDescription item={groups[groupNames[0]].items[0]}></KataDescription>
      </div>
    )
  }

}

import JSONLoader from '_ext-deps/JSONLoader'
const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json'

// groups destructured from result
JSONLoader.loadRemoteFile(url, (err, {groups={}}) => {
  React.render(<Page groups={groups} />, document.getElementById('app'))
})

//React.render(<Page />, document.getElementById('app'))
