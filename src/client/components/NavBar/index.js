import React from 'react'
import { NavLink } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import styles from './index.styl'

export default CSSModules(({ data = [] }) => <ul styleName='wrap'>
  {
    data.map((route, i) => <li key={i} styleName='tab'>
      <NavLink
        exact={route.exact}
        to={route.path}
        style={route.style || {}}
        activeStyle={{color: 'lightGreen'}} >
        {route.title}
      </NavLink>
    </li>)
  }
</ul>, styles, {allowMultiple: true})
