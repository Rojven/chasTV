import AdsBlock from './AdsBlock';

const PageTemplate = ({ children, pageTitle }) => (
  <div className="flex flex-col">
    <h2 className="font-bold text-xl text-black dark:text-white text-left mt-4">{pageTitle}</h2>
    <div className="flex gap-2 flex-col md:flex-row">
      <div className=" mt-4 flex flex-wrap justify-start gap-2 md:w-9/12 w-full">
        {children}
      </div>
      <div className="md:w-3/12 w-full mt-4">
        <AdsBlock />
      </div>
    </div>
  </div>
);

export default PageTemplate;
