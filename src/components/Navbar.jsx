import { NavLink, Link } from 'react-router-dom';
import ToggleButton from './ToggleButton';
import { logo } from '../assets';
import { headerNavLinks } from '../assets/constants';

const NavLinks = () => (
  <div className="flex xs:gap-8 gap-0 xs:w-fit w-full xs:justify-start justify-between">
    {headerNavLinks.map((item) => (
      <NavLink
        key={item.url}
        to={item.url}
        className={({ isActive }) => (`${isActive ? 'dark:text-cyan-400 text-orange-500' : 'dark:text-white text-black'} items-center text-lg leading-none hover:text-orange-500 dark:hover:text-cyan-400 flex gap-2`)}
        end
      >
        <item.icon className="text-medium" />
        {item.name}
      </NavLink>
    ))}
    <ToggleButton mobileClass="md:hidden landscape:hidden" />
  </div>
);

const Navbar = () => (
  <>
    <header className="py-3 lg:px-32 md:px-16 px-4 hidden dark:bg-[#191624] bg-white md:flex landscape:flex justify-between items-end sticky top-0 w-full z-20 gap-5">
      <div className="flex justify-start gap-6 items-end">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 dark:invert-[100%]" />
        </Link>
        <NavLinks />
      </div>
      <ToggleButton mobileClass="" />
    </header>

    <header className="pb-2 pt-2 px-2 dark:bg-[#191624] bg-white flex md:hidden landscape:hidden flex-col justify-between items-center sticky top-0 w-full z-20 gap-2">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 dark:invert-[100%]" />
      </Link>
      <div className="flex xs:justify-start justify-between xs:w-fit w-full xs:gap-5 gap-0 items-end flex-wrap">
        <NavLinks />
      </div>
    </header>
  </>
);

export default Navbar;
