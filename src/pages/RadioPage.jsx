import useParamsUpdate from '../hooks/useParamsUpdate';
import { MusicPlayer, Error, CardBlock } from '../components';
import { radioStations } from '../assets/constants';

const RadioPage = () => {
  const { title, image, streamUrl } = useParamsUpdate(radioStations);

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="w-48 max-w-52 mt-4 mb-10 mx-auto">
          <img src={image} alt={`${title}-icon`} />
        </div>
        <h2 className="font-bold text-xl text-center text-black dark:text-white">{title}</h2>
        <div className="py-2 flex">
          {streamUrl
            ? <MusicPlayer streamUrl={streamUrl} />
            : <Error />}
        </div>
      </div>
      <CardBlock
        title="Слушайте также:"
        mainUrl="radio"
        cardItems={radioStations}
      />
    </div>
  );
};

export default RadioPage;
