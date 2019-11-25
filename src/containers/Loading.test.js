import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loading from './Loading';
import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';

it('renders without crashing', () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware)
        ));
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            (<Loading />
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
