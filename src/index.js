// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


// == Import : local
import App from 'src/components/App';
import store from 'src/store';
import 'bootstrap/dist/css/bootstrap.min.css';

// == Render
const rootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));
