import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // 让action可以是一个函数
import promise from 'redux-promise'; // 让action支持Promise对象
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk, promise];
if(process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    composeWithDevTools({/* devtools options */})(applyMiddleware(...middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
