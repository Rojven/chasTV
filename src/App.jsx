import { Route, Routes } from 'react-router-dom';
import { Navbar, Footer, CookiePopup, ScrollToTop } from './components';
import { Home, Channels, Radio, ChannelPage, Terms, About, Vacancies, RadioPage, ContactUs, NotFoundPage } from './pages';

const App = () => (
  <div className="relative bg-gradient-to-br bg-gray-100 dark:from-black dark:to-[#121286] min-h-screen">
    <Navbar />
    <div className="flex flex-col justify-between md:min-h-[calc(100vh-65px)] min-h-screen">
      <div className="py-5 lg:px-32 md:px-16 px-2">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/channels" element={<Channels />} />
            <Route path="/channels/:id" element={<ChannelPage />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/radio/:id" element={<RadioPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ScrollToTop>
      </div>
      <Footer />
    </div>
    <CookiePopup />
  </div>
);

export default App;
