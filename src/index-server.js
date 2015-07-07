import React from 'react'
import NavKataGroups from './components/KataGroups'
import KataItems from './components/KataItems'

class Page extends React.Component {

  render () {
    const {groups} = this.props

    return (
      <div id="layout" className="content pure-g">
        <NavKataGroups groups={groups}></NavKataGroups>
        <KataItems group={groups[0]}></KataItems>

      </div>
    )
  }

}


import JSONLoader from '_ext-deps/JSONLoader'
const url = 'http://katas.tddbin.com/katas/es6/language/__grouped__.json'

// groups destructured from result
JSONLoader.loadRemoteFile(url, (err, {groups={}}) => {
  console.log(React.renderToString(<Page groups={groups} />))
})

//React.render(<Page />, document.getElementById('app'))
