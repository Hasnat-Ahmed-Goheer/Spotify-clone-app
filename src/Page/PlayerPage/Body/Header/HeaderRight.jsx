import React from 'react';
import classes from './headerRight.module.css'
import { Avatar } from '@mui/material';
import { UseDataContext } from '../../../../Data/DataProvider';

function HeaderRight() {
  const [{user},dispatchData] = UseDataContext();
  return (
    <div className={classes.headerRight}>
        <Avatar  src={user?.images[0]?.url}/>
        <h4>{user?.display_name}</h4>
    </div>
  )
}

export default HeaderRight