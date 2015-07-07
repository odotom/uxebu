import React from 'react'
import NavKataGroups from './KataGroups'
import Katas from './KataItems'
import KataDescription from './KataDescription'

export default class Page extends React.Component {

  render () {
    const {groups} = this.props.groups
    const {clickKata} = this.props

    return (
      <div id="layout" className="content pure-g">
        <NavKataGroups groups={groups}></NavKataGroups>
        <Katas slctKata={this.props.groups.selectedKata} group={this.props.groups.selectedGroup || groups[0]} clickKata={clickKata}></Katas>
        <KataDescription item={this.props.groups.selectedKata || groups[0].katas[0]}></KataDescription>
      </div>
    )
  }

}
