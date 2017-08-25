import React from 'react'
import {Field, reduxForm} from 'redux-form'

class SimpleForm extends React.Component {
    submitForms(values) {
        console.log('1')
        this.props.submitValues(values)
    }
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props
        return (
            <form onSubmit={handleSubmit(values => this.submitForms(values))}>
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

}

export default reduxForm({
    form: 'simple'
})(SimpleForm)