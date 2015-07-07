import React from 'react'
import NavKataGroups from './KataGroups'
import KataItems from './KataItems'
import KataDescription from './KataDescription'

export default class Page extends React.Component {

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
