import React from 'react'
import {KataGroup} from '../katagroups'

export default class Katas extends React.Component {

  // requires .babelrc
  static propTypes = {
    kataGroup: React.PropTypes.instanceOf(KataGroup).isRequired
  }


  render () {

    const {group} = this.props
    const {katas} = group


    return (
      <div id="list" className="pure-u-1">
        {katas.map(kata =>
          <div className="email-item pure-g">
            <div className="pure-u-3-4">
              <h5 className="email-name">{kata.name}</h5>
            </div>
          </div>
        )}
      </div>
    )
  }
}

//Katas.propTypes = {
//  kataGroup: React.PropTypes.instanceOf(KataGroup).isRequired
//}
