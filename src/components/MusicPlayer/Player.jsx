/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useEffect } from 'react';

const Player = ({ activeRadioStation, isPlaying, volume }) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  return (
    <audio
      src={activeRadioStation}
      ref={ref}
    />
  );
};

export default Player;
