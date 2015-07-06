import React from 'react'

class Page extends React.Component {

  render () {
    return (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
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
