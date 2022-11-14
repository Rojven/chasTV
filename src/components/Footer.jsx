import { Link } from 'react-router-dom';
import { footerLinks } from '../assets/constants';

const Footer = () => (
  <footer className="flex md:flex-row flex-col md:gap-0 gap-3 items-center justify-between flex-wrap py-5 lg:px-32 md:px-16 px-3">
    <ul className="flex md:gap-5 flex-wrap md:flex-row flex-col text-center gap-2">
      {footerLinks.map(({ name, url }) => (
        <li
          className="text-gray-400 text-sm hover:text-orange-500 dark:hover:text-cyan-400"
          key={url}
        >
          <Link to={url}>{name}</Link>
        </li>
      ))}
    </ul>
    <p className="text-gray-400 text-sm">Связаться с нами: <a href="mailto:admin@chas.tv" className="underline hover:text-orange-500 dark:hover:text-cyan-400">admin@chas.tv</a></p>
  </footer>
);

export default Footer;
