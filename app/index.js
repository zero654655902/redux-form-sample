import React from 'react';
import ReactDOM from 'react-dom';
// 导入redux的相关模块
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/index'
// 导入我的form表单组件，位于同一目录下的form.js文件中
import SimpleForm from './container/form'

const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <SimpleForm/>
    </Provider>,
    document.getElementById('root')
);