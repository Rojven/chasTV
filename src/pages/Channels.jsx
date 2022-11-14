import { PageTemplate, CardTemplate } from '../components';
import { channels } from '../assets/constants';

const Channels = () => (
  <PageTemplate pageTitle="Каналы">
    {channels.map((item) => (
      <CardTemplate
        key={item.urlId}
        mainUrl="channels"
        {...item}
      />
    ))}
  </PageTemplate>
);

export default Channels;
