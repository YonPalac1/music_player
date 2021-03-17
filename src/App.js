import './App.css';
import {useState} from 'react';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState([
  {
    title: "Morget me too ft. Halsey",
    artist: "Machin gun gelly",
    img_src: "img/img1.jpg",
    src: ""
  },
  {
    title: "Song 2",
    artist: "artist 2",
    img_src: "img/img2.jpg",
    src: ""
  },
  {
    title: "Song 3",
    artist: "artist 3",
    img_src: "img/img3.jpg",
    src: ""
  },
  {
    title: "Song 4",
    artist: "artist 4",
    img_src: "img/img4.jpg",
    src: ""
  }
    ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player  
      song= {songs[currentSongIndex]} 
      nextSongs={songs[nextSongIndex]}
      />
    </div>
  );
}

export default App;
