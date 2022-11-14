import useParamsUpdate from '../hooks/useParamsUpdate';
import { CardBlock, Error } from '../components';
import { channels } from '../assets/constants';

const ChannelPage = () => {
  const { title, image, streamUrl, descr } = useParamsUpdate(channels);

  return (
    <div className="flex flex-col">
      <div className="flex gap-3 justify-start items-center">
        <div className="w-8 h-8 grid place-content-center">
          <img src={image} alt={`${title}-icon`} />
        </div>
        <h2 className="font-bold text-xl text-black dark:text-white">{title}</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 lg:flex-row mt-4">
          { streamUrl
            ? <iframe src={streamUrl} title={`${title}-unique-title`} frameBorder="0" scrolling="no" allowFullScreen="" className="bg-slate-200 lg:w-4/5 w-full rounded-lg max-h-[500px] md:min-h-[500px] min-h-[250px]" key={title} />
            : (
              <Error />
            )}
        </div>
        <div>
          <h3 className=" mt-4 text-lg font-bold text-black dark:text-white">Сейчас идет: СашаТаня. Сезон 3. Серия 30</h3>
          <p className=" mt-1 text-sm font-medium text-gray-400"><span className="text-black dark:text-white">Через 16 минут:</span> СашаТаня. Сезон 3. Серия 31</p>
        </div>
        <div className="mb-8 mt-12 w-full md:w-2/4">
          <div className="flex gap-3 justify-start items-center">
            <div className="w-8 h-8 grid place-content-center">
              <img src={image} alt={`${title}-icon`} />
            </div>
            <h2 className="font-bold text-xl text-black dark:text-white">Канал: {title}</h2>
          </div>
          <p className="text-gray-400 text-sm mt-2"><span className="text-black dark:text-white">Описание:</span> {descr.one}</p>
          <p className="text-gray-400 text-sm mt-2"><span className="text-black dark:text-white">Что показывает:</span> {descr.two}</p>
          <p className="text-gray-400 text-sm mt-2"><span className="text-black dark:text-white">Аудитория:</span> {descr.three}</p>
        </div>
        <CardBlock
          title="Смотрите также:"
          mainUrl="channels"
          cardItems={channels}
        />
      </div>
    </div>
  );
};

export default ChannelPage;
