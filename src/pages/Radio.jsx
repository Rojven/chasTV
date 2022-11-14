import { PageTemplate, CardTemplate } from '../components';
import { radioStations } from '../assets/constants';

const Radio = () => (
  <PageTemplate pageTitle="Радио">
    {radioStations.map((item) => (
      <CardTemplate
        key={item.urlId}
        mainUrl="radio"
        {...item}
      />
    ))}
  </PageTemplate>
);

export default Radio;
