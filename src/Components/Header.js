import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@material-ui/core';

const Header = () => {
  return (
    <div className='tinder-header'>
      <IconButton className='header-icons' fontSize='large'>
      <PersonIcon fontSize='large' />
      </IconButton>
      
        <img src="Tinder-128.webp"  alt="" />
        <IconButton className='header-icons' fontSize='large'>
        <ForumIcon  fontSize='large'/>
        </IconButton>
        

    </div>
  )
}

export default Header