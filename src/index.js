import React from 'react'
import KataGroups from './components/KataGroups'

class Page extends React.Component {

  render () {
    const {groups} = this.props
    const groupNames = Object.keys(groups)

    return (
      <ul>
        <KataGroups groupNames={groupNames}></KataGroups>
      </ul>
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
