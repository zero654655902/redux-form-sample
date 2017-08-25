import React from 'react';
import ReactDOM from 'react-dom';
// 导入redux的相关模块
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
// 导入我的form表单组件，位于同一目录下的form.js文件中
import ContactForm from './form'

const reducers = {
    form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <ContactForm />
    </Provider>,
    document.getElementById('root')
);