import { NavLink, Link } from 'react-router-dom';
import ToggleButton from './ToggleButton';
import { logo } from '../assets';
import { headerNavLinks } from '../assets/constants';

const NavLinks = () => (
  <div className="flex xs:gap-12 gap-14 xs:w-fit w-full xs:justify-start justify-center">
    {headerNavLinks.map((item) => (
      <NavLink
        key={item.url}
        to={item.url}
        className={({ isActive }) => (`${isActive ? 'dark:text-cyan-400 text-orange-500' : 'dark:text-white text-black'} items-center text-lg leading-none hover:text-orange-500 dark:hover:text-cyan-400 flex gap-2 md:mt-4 landscape:mt-4`)}
        end
      >
        <item.icon className="text-medium" />
        {item.name}
      </NavLink>
    ))}
    <ToggleButton mobileClass="xs:flex landscape:hidden hidden" />
  </div>
);

const Navbar = () => (
  <>
    <header className="py-3 lg:px-32 md:px-16 px-4 hidden dark:bg-[#191624] bg-white md:flex landscape:flex justify-between items-center sticky top-0 w-full z-20 gap-5">
      <div className="flex justify-start gap-14 items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-36 dark:invert-[100%]" />
        </Link>
        <NavLinks />
      </div>
      <ToggleButton mobileClass="flex mt-4" />
    </header>

    {/* mobile navbar */}
    <header className="pb-3 pt-2 px-2 dark:bg-[#191624] bg-white flex md:hidden landscape:hidden flex-col justify-between items-center sticky top-0 w-full z-20 gap-5">
      <div className="flex xs:justify-start items-end justify-center xs:w-fit w-full gap-14">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 dark:invert-[100%]" />
        </Link>
        <ToggleButton mobileClass="flex xs:hidden" />
      </div>
      <NavLinks />
    </header>
  </>
);

export default Navbar;
