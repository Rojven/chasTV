import { Link } from 'react-router-dom';

const CardTemplate = ({ mainUrl, urlId, title, image, titleDisplay }) => (
  <Link
    to={`/${mainUrl}/${urlId}`}
    className="flex flex-col w-[130px] h-[110px] bg-white dark:bg-white/5 dark:bg-opacity-80 backdrop-blur-sm rounded-lg cursor-pointer group p-2"
  >
    <div className={`absolute inset-0 justify-center cursor-pointer rounded-lg items-center dark:bg-black dark:bg-opacity-70 bg-gray-100 bg-opacity-70 group-hover:flex ${!title ? 'flex' : 'hidden'}`}>
      {!titleDisplay && <p className="font-semibold text-sm text-black dark:text-white truncate text-center">{title}</p>}
    </div>
    <img
      alt={`${urlId}-icon`}
      src={image}
      className={`${titleDisplay ? 'max-w-[70px]' : 'max-w-[80px]'} m-auto`}
    />
    {titleDisplay && <p className="font-semibold text-sm text-black dark:text-white truncate text-center">{title}</p>}
  </Link>
);

export default CardTemplate;
