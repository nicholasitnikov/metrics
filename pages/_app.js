import '../styles/globals.css'
import 'antd/dist/antd.css'; 

import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../services/reducers';

function MyApp({ Component, pageProps }) {

  const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(rootReducer, enhancer);

  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;