import { NavLink, Link } from 'react-router-dom';
import ToggleButton from './ToggleButton';
import { logo } from '../assets';
import { headerNavLinks } from '../assets/constants';

const NavLinks = () => (
  <div className="flex gap-8">
    {headerNavLinks.map((item) => (
      <NavLink
        key={item.url}
        to={item.url}
        className={({ isActive }) => (`${isActive ? 'dark:text-cyan-400 text-orange-500' : 'dark:text-white text-black'} items-center text-lg leading-none hover:text-orange-500 dark:hover:text-cyan-400 flex gap-3`)}
        end
      >
        <item.icon className="text-medium" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Navbar = () => (
  <>
    <header className="py-3 lg:px-32 md:px-16 px-4 hidden dark:bg-[#191624] bg-white md:flex justify-between items-end sticky top-0 w-full z-20 gap-5">
      <div className="flex justify-start gap-6 items-end">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 dark:invert-[100%]" />
        </Link>
        <NavLinks />
      </div>
      <ToggleButton />
    </header>

    <header className="pb-2 pt-2 px-4 dark:bg-[#191624] bg-white flex md:hidden flex-col justify-between items-center sticky top-0 w-full z-20 gap-5">
      <div className="flex justify-start gap-5 items-end">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 dark:invert-[100%]" />
        </Link>
        <ToggleButton />
      </div>
      <NavLinks />
    </header>
  </>
);

export default Navbar;
