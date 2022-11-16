import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Loader } from './components';
import { store } from './redux/store';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider>,
);
