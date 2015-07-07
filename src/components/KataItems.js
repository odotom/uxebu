import React from 'react'

export default class KataItems extends React.Component {

  render () {

    const {group} = this.props
    const items = group.katas


    return (
      <div id="list" className="pure-u-1">
        {items.map(item =>
          <div className="email-item pure-g">
            <div className="pure-u-3-4">
              <h5 className="email-name">{item.name}</h5>
            </div>
          </div>
        )}
      </div>
    )
  }
}
