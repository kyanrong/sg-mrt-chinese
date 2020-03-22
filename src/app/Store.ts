import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

let composed = compose(
  applyMiddleware(thunk)
);

if (process.env.NODE_ENV !== 'production') {
  composed = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = createStore(
  reducer,
  composed
);

export default store;
