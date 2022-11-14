import { CardBlock } from '../components';
import { channels, radioStations } from '../assets/constants';

const Home = () => (
  <>
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
  </>
);

export default Home;
