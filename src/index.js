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
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import middleware1 from './unused/middleware1'
import middleware2 from './unused/middleware2';

const sagaMiddleware = createSagaMiddleware();
//前面的middleware先处理
const middleware = [thunk, promise, sagaMiddleware, middleware1, middleware2];
if(process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    composeWithDevTools({/* devtools options */})(
        applyMiddleware(
            ...middleware
        )
    )
);

//可以订阅更新
//调用unsubscribe可以注销订阅
const unsubscribe = store.subscribe(() =>
  console.log(`store.getState() = `, store.getState())
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
