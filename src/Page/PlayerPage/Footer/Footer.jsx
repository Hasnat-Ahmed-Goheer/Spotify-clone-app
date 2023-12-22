import React, { useEffect } from "react";
import classes from "./footer.module.css";
import FooterLeft from "./FooterLeft";
import FooterCenter from "./FooterCenter";
import FooterRight from "./FooterRight";
import { UseTokenContext } from "../../../Data/TokenProvider";
import { UseMusicContext } from "../../../Data/MusicProvider";
import { useState } from "react";
const Footer = () => {
  const [{ token }] = UseTokenContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const [{ musicItem, playState }, dispatchMusic] = UseMusicContext();

  useEffect(() => {
    const getPlaybackState = async () => {
      const response = await fetch("https://api.spotify.com/v1/me/player", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 200) {
        setIsPlaying(false);
        return;
      }

      setIsPlaying(true);
      const data = await response.json();
      console.log(data);

      if (data?.device?.is_active) {
        dispatchMusic({
          type: "SET_PLAY_STATE",
          playState: {
            activeOn: data.device?.name,
            volume: data.device?.volume_percent,
            isPlaying: data.is_playing,
            repeatState: data.repeat_state,
            shuffleState: data.shuffle_state,
          },
        });
      }
      if (data?.device?.is_active && data?.is_playing) {
        dispatchMusic({
          type: "SET_MUSIC",
          musicItem: {
            name: data.item?.name,
            artist: data.item?.artists[0].name,
            image: data.item?.album?.images[0].url,
          },
        });
      }
    };
    console.log("Rendered");

    getPlaybackState();
  }, [token, musicItem, playState, isPlaying]);

  return (
    <>
      {playState?.activeOn && (
        <div className={classes.activeOn}>{playState.activeOn}</div>
      )}
      <div className={classes.footer}>
        <FooterLeft playing={isPlaying} music={musicItem} />
        <FooterCenter />
        <FooterRight />
      </div>
    </>
  );
};

export default Footer;
