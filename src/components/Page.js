import React from 'react'
import NavKataGroups from './KataGroups'
import Katas from './KataItems'
import KataDescription from './KataDescription'

export default class Page extends React.Component {

  render () {
    const {groups} = this.props.groups

    return (
      <div id="layout" className="content pure-g">
        <NavKataGroups groups={groups}></NavKataGroups>
        <Katas group={groups[0]}></Katas>
        <KataDescription item={groups[0].katas[0]}></KataDescription>
      </div>
    )
  }

}
