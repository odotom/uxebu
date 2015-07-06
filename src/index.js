import React from 'react'
import NavKataGroups from './components/NavKataGroups'
import KataItems from './components/KataItems'

class Page extends React.Component {

  render () {
    const {groups} = this.props
    const groupNames = Object.keys(groups)

    return (
      <div id="layout" className="content pure-g">
        <NavKataGroups groups={groups}></NavKataGroups>
        <KataItems group={groups[groupNames[0]]}></KataItems>

      </div>
    )
  }

}


import JSONLoader from './JSONLoader'
const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json'

// groups destructured from result
JSONLoader.loadRemoteFile(url, (err, {groups={}}) => {
  React.render(<Page groups={groups} />, document.getElementById('app'))
})

//React.render(<Page />, document.getElementById('app'))
