import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow src='https://avatars1.githubusercontent.com/u/59509899?s=400&u=deb281d291b0b15bb715e2f20e4c20842ce7c752&v=4' title='Sonny Tonight' />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'
      />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      <SidebarRow Icon={ChatIcon} title='Messenger'/>
      <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
      <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
      <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
    </div>
  )
}

export default Sidebar
