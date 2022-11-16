
const DescrBlock = ({ title, image, descr, descrTitles }) => {
  const { titleOne, titleTwo, titleThree, titleFour, titleFive } = descrTitles;
  return (
    <div className="mb-8 mt-12 w-full md:w-2/4">
      <div className="flex gap-3 justify-start items-center">
        <div className="w-8 h-8 grid place-content-center">
          <img src={image} alt={`${title}-icon`} className="w-full" />
        </div>
        <h2 className="font-bold text-xl text-black dark:text-white">{titleOne}: {title}</h2>
      </div>
      {descr.four && <p className="text-gray-400 text-sm mt-2"><span className="text-black dark:text-white">{titleFive}:</span> {descr.four}</p>}
      <p className="text-gray-400 text-sm mt-2"><span className="text-black dark:text-white">{titleTwo}:</span> {descr.one}</p>
      <p className="text-gray-400 text-sm mt-2"><span className="text-black dark:text-white">{titleThree}:</span> {descr.two}</p>
      <p className="text-gray-400 text-sm mt-2"><span className="text-black dark:text-white">{titleFour}:</span> {descr.three}</p>
    </div>
  );
};

export default DescrBlock;
