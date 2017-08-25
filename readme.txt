- [ ] 第一步：已经配置好react和redux的相关依赖下，通过npm install redux-form安装依赖
- [ ] 第二步：
- [ ] 在入口文件中写入：
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

调用combineReducers可以将各个子 reducer的结果合并成一个 state 对象，然后state对象就变成了这样：
{
  reducer1: ...,
  reducer2: ...,
  form:formReducer
}

然后通过redux-form的接口，就可以实现在表单中输入的内容与state对象中form表单数据的同步了。

入口文件(src下的index)是这样的：
// 导入react的相关模块
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
- [ ] 第三步：写一个form组件：
* 在文件顶部通过
import { Field, reduxForm／／或者其他的组件 } from 'redux-form';
* 然后在文件最下方写入：
export default reduxForm({
  form: 'simple'  // 你的表单组件的特殊标记
})(SimpleForm) // 这里的SimpleForm是你写的表单组件

form.js的内容为：
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(values => console.log(values))}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'
})(SimpleForm)

