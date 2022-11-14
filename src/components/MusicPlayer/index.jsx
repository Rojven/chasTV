import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { playPause, setActiveRadioStation, resetActiveRadioStation } from '../../redux/features/playerSlice';
import Controls from './Controls';
import Player from './Player';
import VolumeBar from './VolumeBar';

const MusicPlayer = ({ streamUrl }) => {
  const { activeRadioStation, isActive, isPlaying } = useSelector((state) => state.player);
  const [volume, setVolume] = useState(0.8);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };
  useEffect(() => {
    dispatch(resetActiveRadioStation(''));
    dispatch(setActiveRadioStation(streamUrl));
  }, [id]);
  console.log(streamUrl);
  return (
    <div className="relative sm:px-12 px-3 w-full flex items-center justify-between flex-col gap-6">
      <div className="flex">
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
        />
        <Player
          activeRadioStation={activeRadioStation}
          isPlaying={isPlaying}
          volume={volume}
        />
      </div>
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default MusicPlayer;
