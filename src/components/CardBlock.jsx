import CardTemplate from './CardTemplate';

const CardBlock = ({ cardItems, title, mainUrl }) => (
  <div className="w-full flex flex-col mt-8 overflow-hidden">
    <h2 className="text-black dark:text-white font-bold text-xl">{title}</h2>
    <div className="flex mt-4 flex-wrap gap-2 xs:justify-start justify-center">
      {cardItems.map((item) => (
        <CardTemplate
          mainUrl={mainUrl}
          key={item.urlId}
          {...item}
        />
      ))}
    </div>
  </div>
);

export default CardBlock;
