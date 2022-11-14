const PageTemplate = ({ children, pageTitle }) => (
  <div className="flex flex-col">
    <h2 className="font-bold text-xl text-black dark:text-white text-left mt-4">{pageTitle}</h2>
    <div className=" mt-4 flex flex-wrap justify-center md:justify-start gap-2">
      {children}
    </div>
  </div>
);

export default PageTemplate;
