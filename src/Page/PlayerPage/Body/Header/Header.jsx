import React from 'react'
import classes from './header.module.css';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

function Header() {
  return (
    <div className={classes.header}>
      <HeaderLeft/>
      <HeaderRight/>
    </div>
  )
}

export default Header