import React from 'react'
import {KataGroup} from '../katagroups'
import classnames from 'classnames'

export default class Katas extends React.Component {

  // requires .babelrc
  static propTypes = {
    kataGroup: React.PropTypes.instanceOf(KataGroup).isRequired
  }


  render () {

    const {group, clickKata, slctKata} = this.props
    const {katas} = group



    return (
      <div id="list" className="pure-u-1">
        {katas.map(kata =>
          <KataItem  clickKata={clickKata} kata={kata} slctKata={slctKata}></KataItem>
        )}
      </div>
    )
  }
}

class KataItem extends React.Component {

  render () {

    const {clickKata,kata, slctKata} = this.props

    let clsNames = {'email-item': true, 'email-item-selected': (Object.is(slctKata, kata)), 'pure-g':true}

    return (
      <div className={classnames(clsNames)} onClick={clickKata.bind(null, kata.id)}>
        <div className="pure-u-3-4">
          <h5 className="email-subject">{kata.name} </h5>
          <p className='email-desc'>{kata.description}</p>
        </div>
      </div>
    )

  }
}

//Katas.propTypes = {
//  kataGroup: React.PropTypes.instanceOf(KataGroup).isRequired
//}
