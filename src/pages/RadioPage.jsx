import useParamsUpdate from '../hooks/useParamsUpdate';
import { MusicPlayer, Error, CardBlock, AdsBlock, DescrBlock, VkComments } from '../components';
import { radioStations } from '../assets/constants';

const RadioPage = () => {
  const { title, image, streamUrl, descr } = useParamsUpdate(radioStations);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="md:w-9/12 w-full">
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
        <div className="md:w-3/12 w-full mt-4">
          <AdsBlock />
        </div>
      </div>
      <CardBlock
        title="Слушайте также:"
        mainUrl="radio"
        cardItems={radioStations}
      />
      <DescrBlock
        title={title}
        image={image}
        descr={descr}
        descrTitles={{
          titleOne: 'Радио',
          titleTwo: 'Тематика',
          titleThree: 'Страна',
          titleFour: 'Язык',
          titleFive: 'Описание',
        }}
      />
      <VkComments elementId="radioPage" pageId="radio" />
    </div>
  );
};

export default RadioPage;
