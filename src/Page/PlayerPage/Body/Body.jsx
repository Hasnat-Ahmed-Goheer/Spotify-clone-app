import React from 'react'
import classes from './body.module.css';
import Header from './Header/Header';
import PlaylistInfo from './PlaylistInfo/PlaylistInfo';
import SongsList from './SongsList/SongsList';

const Body = () => {
  return (
    <div className={classes.body}>
      <Header/>
      <PlaylistInfo/>
      <SongsList/>
    </div>
  )
}

export default Body