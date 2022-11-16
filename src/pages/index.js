import { lazy } from 'react';

import Home from './Home';
import Channels from './Channels';
import ChannelPage from './ChannelPage';
import Radio from './Radio';
import RadioPage from './RadioPage';

const About = lazy(() => import('./About'));
const Terms = lazy(() => import('./Terms'));
const Vacancies = lazy(() => import('./Vacancies'));
const ContactUs = lazy(() => import('./ContactUs'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

export {
  Home,
  Channels,
  ChannelPage,
  Radio,
  Terms,
  About,
  Vacancies,
  RadioPage,
  ContactUs,
  NotFoundPage,
};
