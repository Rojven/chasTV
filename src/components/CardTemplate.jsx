import { Link } from 'react-router-dom';

const CardTemplate = ({ mainUrl, urlId, title, image, titleDisplay }) => (
  <Link
    to={`/${mainUrl}/${urlId}`}
    className="flex flex-col xs:w-[100px] h-[100px] w-[31%] min-w-[95px] bg-white dark:bg-white/5 dark:bg-opacity-80 backdrop-blur-sm rounded-lg cursor-pointer group p-1 overflow-hidden"
  >
    {!titleDisplay
      && (
      <div className={`absolute bottom-0 left-0 p-1 w-full justify-center cursor-pointer rounded-bl-lg rounded-br-lg items-center dark:bg-black bg-white md:group-hover:flex group-hover:hidden ${!title ? 'flex' : 'hidden'}`}>
        <p className="font-semibold text-sm text-black dark:text-white truncate text-center">{title}</p>
      </div>
      )}
    <img
      alt={`${urlId}-icon`}
      src={image}
      className={`${titleDisplay ? 'max-w-[65px]' : 'max-w-[80px]'} m-auto`}
    />
    <p className={`${titleDisplay ? 'block' : 'hidden'} font-semibold text-sm text-black dark:text-white truncate text-center`}>{title}</p>
  </Link>
);

export default CardTemplate;
