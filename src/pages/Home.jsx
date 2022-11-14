import { CardBlock, AdsBlock } from '../components';
import { channels, radioStations } from '../assets/constants';

const Home = () => (
  <div className="flex gap-2 flex-col md:flex-row">
    <div className="md:w-9/12 w-full">
      <CardBlock
        title="Каналы"
        mainUrl="channels"
        cardItems={channels}
      />
      <CardBlock
        title="Радио"
        mainUrl="radio"
        cardItems={radioStations}
      />
    </div>
    <div className="md:w-3/12 w-full md:mt-[4.75rem] mt-4">
      <AdsBlock />
    </div>
  </div>
);

export default Home;
