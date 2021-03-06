import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './components/App/App';
import Spinner from 'components/common/Spinner/Spinner';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* PersistGate сохранение в localStorage - не зарендерит ничего что внутри него пока не считает все данные с localStorage*/}
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
