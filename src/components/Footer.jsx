import { Link } from 'react-router-dom';
import { footerLinks } from '../assets/constants';

const Footer = () => (
  <footer className="flex md:flex-row flex-col items-center justify-between flex-wrap py-5 lg:px-32 md:px-16 px-2">
    <p className="text-sm text-gray-400 text-center mb-12">Час.ТВ - смотри онлайн тв в прямом эфире в любой точке мира с любого устройсва. Стабильность и высокое качествотв трансляций делают Час.ТВ незаменимым спутников любого поклонника телевидения.</p>
    <ul className="flex md:gap-5 flex-wrap md:flex-row landscape:flex-row flex-col items-center gap-2 w-full justify-center">
      {footerLinks.map(({ name, url }) => (
        <li
          className="text-gray-400 text-sm hover:text-orange-500 dark:hover:text-cyan-400 underline"
          key={url}
        >
          <Link to={url}>{name}</Link>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
