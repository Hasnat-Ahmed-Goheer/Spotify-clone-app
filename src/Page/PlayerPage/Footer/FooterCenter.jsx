import { BiShuffle } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { BsRepeat, BsRepeat1 } from "react-icons/bs";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import "./footerCenter.css";
import { UseMusicContext } from "../../../Data/MusicProvider";
import SetPlayState from "../../../hooks/use-playState-hook";

function FooterCenter() {
  const [{ playState }] = UseMusicContext();
  
  const {   postState:nextState } = SetPlayState('next',"POST");
  const {  postState:previousState } = SetPlayState('previous',"POST");
  const {  postState:pauseState } = SetPlayState('pause',"PUT");
  const {  postState:resumeState } = SetPlayState('play',"PUT");
  const { postState: shuffleState } = SetPlayState(
    `shuffle?state=`,
    "PUT",
  );

  let repeat;
  if (playState?.repeatState === "context") {
    repeat = <BsRepeat className="on" />;
  } else if (playState?.repeatState === "track") {
    repeat = <BsRepeat1 className="on" />;
  } else {
    repeat = <BsRepeat className="footerCenter__icon" />;
  }

  return (
    <div className="footerCenter">
      {
        <BiShuffle onClick={shuffleState}
          className={`${playState?.shuffleState ? "on" : "footerCenter__icon"}`}
        />
      }
      <BiSkipPrevious className="icon" onClick={previousState} />
      {playState?.isPlaying ? (
        <AiFillPauseCircle className="icon" onClick={pauseState} />
      ) : (
        <AiFillPlayCircle className="icon" onClick={resumeState} />
      )}

      <BiSkipNext className="icon" onClick={nextState} />

      {repeat}
    </div>
  );
}

export default FooterCenter;
