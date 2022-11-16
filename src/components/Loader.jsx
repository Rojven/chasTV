import { loader } from '../assets';

const Loader = () => (
  <div className="w-full h-screen grid place-content-center bg-gradient-to-br bg-gray-100 dark:from-black dark:to-[#121286]">
    <img src={loader} alt="loader" className="w-20" />
  </div>
);

export default Loader;
