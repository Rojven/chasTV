import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';

const Controls = ({ isPlaying, handlePlayPause }) => (
  <div>
    {isPlaying ? (
      <BsFillPauseFill size={45} onClick={handlePlayPause} className="cursor-pointer text-black dark:text-white" />
    ) : (
      <BsFillPlayFill size={45} onClick={handlePlayPause} className="cursor-pointer text-black dark:text-white" />
    )}
  </div>
);

export default Controls;
