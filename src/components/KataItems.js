import React from 'react'
import classnames from 'classnames'
import KataGroups, {KataGroup} from '../katagroups'

export default class Katas extends React.Component {

  // static here requires .babelrc
  static propTypes = {
    kataGroup: React.PropTypes.instanceOf(KataGroup).isRequired,
    kataGroups: React.PropTypes.array.isRequired
  }

  render () {
    const {group, clickKata, slctKata} = this.props
    const {katas} = group

    // onclick on separate div to make it work
    return (
      <div id="list" className="pure-u-1">
        {katas.map (kata =>
          <div onClick={clickKata.bind(this, kata.id)} key={`kata-${kata.id}`}>
            <KataItem  kata={kata} slctKata={slctKata} ></KataItem>
          </div>
        )}
      </div>
    )
  }
}

class KataItem extends React.Component {

  static propTypes = {
    kata: React.PropTypes.array.isRequired,
    slctKata: React.PropTypes.object.isRequired
  }

  render () {
    const {kata, slctKata} = this.props
    let clsNames = {'email-item': true, 'email-item-selected': Object.is(slctKata, kata), 'pure-g':true}

    return (
      <div className={classnames(clsNames)}>
        <div className="pure-u-3-4">
          <h5 className="email-subject">{kata.name} </h5>
          <p className='email-desc'>{kata.description}</p>
        </div>
      </div>
    )

  }
}


