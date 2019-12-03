import React from 'react';
import './SideBarItem.css'

export default function SideBarItem(props) {

    return (
      <li className="sidebar-item">
        {props.name}
      </li>
    )
}

