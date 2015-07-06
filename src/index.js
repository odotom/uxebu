import React from 'react'

class Page extends React.Component {

  render () {
    return (
      <ul>
        <li>item 1</li>
      </ul>

    )
  }
}

React.render(<Page />, document.getElementById('app'))
