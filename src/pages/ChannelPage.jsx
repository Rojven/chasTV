import useParamsUpdate from '../hooks/useParamsUpdate';
import { CardBlock, Error, DescrBlock, VkComments, AdsBlock } from '../components';
import { channels } from '../assets/constants';

const ChannelPage = () => {
  const { title, image, streamUrl, descr } = useParamsUpdate(channels);

  return (
    <div className="flex flex-col">
      <div className="flex gap-3 justify-start items-center">
        <div className="w-10 h-10 grid place-content-center">
          <img src={image} alt={`${title}-icon`} />
        </div>
        <h2 className="font-bold text-xl text-black dark:text-white">{title}</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="flex flex-col gap-4 lg:flex-row mt-4 md:w-9/12 w-full">
            { streamUrl
              ? <iframe src={streamUrl} title={`${title}-unique-title`} frameBorder="0" scrolling="no" allowFullScreen="" className="bg-slate-200 w-full rounded-lg max-h-[500px] md:min-h-[400px] min-h-[250px]" key={title} />
              : (
                <Error />
              )}
          </div>
          <div className="w-full md:w-3/12 mt-4">
            <AdsBlock />
          </div>
        </div>
        <div>
          <h3 className=" mt-4 text-lg font-bold text-black dark:text-white">Сейчас идет: СашаТаня. Сезон 3. Серия 30</h3>
          <p className=" mt-1 text-sm font-medium text-gray-400"><span className="text-black dark:text-white">Через 16 минут:</span> СашаТаня. Сезон 3. Серия 31</p>
        </div>
        <CardBlock
          title="Смотрите также:"
          mainUrl="channels"
          cardItems={channels}
        />
        <DescrBlock
          title={title}
          image={image}
          descr={descr}
          descrTitles={{
            titleOne: 'Канал',
            titleTwo: 'Описание',
            titleThree: 'Что показывает',
            titleFour: 'Аудитория',
            titleFive: null,
          }}
        />
      </div>
      <VkComments elementId="channelPage" pageId="channels" />
    </div>
  );
};

export default ChannelPage;
