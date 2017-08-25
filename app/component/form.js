import React from 'react'
import {Field, reduxForm} from 'redux-form'

//const {DOM:{input}}=React

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
                    <label>Email</label>
                    <div>
                        <Field name="email" component="input" type="text" placeholder="Email"/>
                    </div>
                </div>

                <div>
                    <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
                    <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
                </div>

                <div>
                    <label>Favorite Color</label>
                    <div>
                        <Field name="favoriteColor" component="select">
                            <option></option>
                            <option value="ff0000">Red</option>
                            <option value="00ff00">Green</option>
                            <option value="0000ff">Blue</option>
                        </Field>
                    </div>
                </div>

                <div>
                    <label htmlFor="employed">Employed</label>
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                </div>

                <div>
                    <label>Notes</label>
                    <div>
                        <Field name="notes" component="textarea"/>
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