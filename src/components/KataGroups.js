import React from 'react'

export default class NavKataGroups extends React.Component {

render () {

  const {groups} = this.props

  return (

    <div id="nav" className="pure-u">
      <a href="#" className="nav-menu-button">Menu</a>

      <div className="nav-inner">
        <div className="pure-menu">
          <ul className="pure-menu-list">
            <li className="pure-menu-heading">Kata groups</li>
            <li className="pure-menu-item">
            </li>
            {groups.map (group => <li className="pure-menu-item">
              <a href="#" className="pure-menu-link">{group.name}  <span className="email-count">({group.katasCount})</span></a>
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

}