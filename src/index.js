import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './Data/DataProvider';
import { TokenProvider } from './Data/TokenProvider';
import { PlaylistProvider } from './Data/PlaylistProvider';
import { SpotifyProvider } from './Data/SpotifyProvider';
import { PlaylistItemProvider } from './Data/PlaylistItemProvider';
import { PlaylistIdProvider } from './Data/PlaylistIdProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <TokenProvider>
        <PlaylistProvider>
          <SpotifyProvider>
            <PlaylistItemProvider>
              <PlaylistIdProvider>
                <App />
              </PlaylistIdProvider>
            </PlaylistItemProvider>
          </SpotifyProvider>
        </PlaylistProvider>
      </TokenProvider>
    </DataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
