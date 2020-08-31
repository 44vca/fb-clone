import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

function SidebarRow({ src, Icon, title }) {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src}/>}
      {Icon && <Icon />}
      
      <h4 className="">{title}</h4>
    </div>
  )
}

export default SidebarRow
