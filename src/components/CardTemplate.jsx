import { Link } from 'react-router-dom';

const CardTemplate = ({ mainUrl, urlId, title, image, titleDisplay }) => (
  <Link
    to={`/${mainUrl}/${urlId}`}
    className="flex flex-col xs:w-[100px] h-[100px] w-[31%] min-w-[95px] bg-white dark:bg-white/5 dark:bg-opacity-80 backdrop-blur-sm rounded-lg cursor-pointer group p-1 overflow-hidden"
  >
    <div className={`absolute inset-0 justify-center cursor-pointer rounded-lg items-center dark:bg-black dark:bg-opacity-70 bg-gray-100 bg-opacity-70 md:group-hover:flex group-hover:hidden ${!title ? 'flex' : 'hidden'}`}>
      {!titleDisplay && <p className="font-semibold text-sm text-black dark:text-white truncate text-center">{title}</p>}
    </div>
    <img
      alt={`${urlId}-icon`}
      src={image}
      className={`${titleDisplay ? 'max-w-[65px]' : 'max-w-[80px]'} m-auto`}
    />
    {titleDisplay && <p className="font-semibold text-sm text-black dark:text-white truncate text-center">{title}</p>}
  </Link>
);

export default CardTemplate;
