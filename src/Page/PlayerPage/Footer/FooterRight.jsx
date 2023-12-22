import React, { useState, useEffect } from "react";
import classes from "./footerRight.module.css";
import { Grid, Slider } from "@mui/material";
import { VolumeUp, VolumeDown, PlaylistPlay } from "@mui/icons-material";
import { UseMusicContext } from "../../../Data/MusicProvider";
import useSetPlayState from "../../../hooks/use-playState-hook";

function FooterRight() {
  const [{ playState }] = UseMusicContext();
  const [volume, setVolume] = useState(playState?.volume);
  const { postState } = useSetPlayState(
    `volume?volume_percent=${volume}`,
    "PUT"
  );

  useEffect(() => {
    // Update the volume on the server when the local volume changes
    postState();
  }, [volume, postState]);

  const handleVolumeChange = (_, newValue) => {
    // Update the local state
    setVolume(newValue);
  };

  return (
    <div className={classes.footerRight}>
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlay className={classes["footerRight__icon"]} />
        </Grid>
        <Grid item>
          <VolumeDown className={classes["footerRight__icon"]} />
        </Grid>
        <Grid item xs>
          <Slider
            className={classes.slider}
            min={0}
            max={100}
            value={volume}  
            onChange={handleVolumeChange}
          />
        </Grid>
        <Grid item>
          <VolumeUp className={classes["footerRight__icon"]} />
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterRight;
