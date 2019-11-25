import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/App';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(rootSaga);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
if (module.hot) { module.hot.accept(App);}