import React,{useState} from 'react'
import './headerLeft.css';
import { Search } from '@mui/icons-material';

function HeaderLeft() {
const [inputFocused, setInputFocused] = useState(false);
  return (
    <div className={`headerLeft ${inputFocused ? "focused" : ""}`}>
      <Search />
      <input
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        type="text"
        placeholder="What do you want to listen to?"
      />
    </div>
  );
}

export default HeaderLeft