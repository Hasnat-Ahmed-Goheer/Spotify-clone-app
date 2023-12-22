import { useState } from "react";
import { UseTokenContext } from "../Data/TokenProvider";
import { UseMusicContext } from "../Data/MusicProvider";

const SetPlayState = (urlEndpoint,method) => {
  const [{ token }] = UseTokenContext();
  const [{playState}] = UseMusicContext();
  
  

  const [isProcessing, setIsProcessing] = useState(false);

  const postState = async () => {
    if (!isProcessing) {
      setIsProcessing(true);
      if(playState?.shuffleState){
      }
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/me/player/${urlEndpoint}`,
          {
            method: method,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        // Perform any additional actions with the response here if needed.
      } catch (error) {
        console.error("Error while fetching data:", error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  // Call postState when the component mounts

  return {  
    postState,
  };
};

export default SetPlayState;
