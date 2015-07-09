import React from 'react'
import KataGroups from '../katagroups'
import NavKataGroups from './KataGroups'
import Katas from './KataItems'
import KataDescription from './KataDescription'

export default class Page extends React.Component {
  static propTypes = {
    groups: React.PropTypes.instanceOf(KataGroups).isRequired
  }

  // getInitialState
  constructor (props) {
    super()       //
    this.state= {selectedKata: props.selectedKata}
  }

  // Autobinding trick with property initializers, see  https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html
  clickKata = (kataId, event) => {
    event.preventDefault()
    this.props.groups.selectKataById(kataId)
    this.setState({selectedKata: this.props.groups.selectedKata})
  }

  render () {
    const kataGroups = this.props.groups
    const {groups} = this.props.groups

    return (
      <div id="layout" className="content pure-g">
        <NavKataGroups groups={groups}></NavKataGroups>
        <Katas ref='Katas' kataGroups={kataGroups} group={kataGroups.selectedGroup || groups[0]} slctKata={this.state.selectedKata} clickKata={this.clickKata}></Katas>
        <KataDescription kata={kataGroups.selectedKata || groups[0].katas[0]}></KataDescription>
      </div>
    )
  }

}
