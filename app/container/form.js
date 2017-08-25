import {submitAction} from "../action/submitAction";
import {connect} from 'react-redux'
import SimpleForm  from "../component/form";
const mapDispatchToProps=(dispatch)=>{
    return{

        submitValues:(values)=>{
            console.log('2')
            dispatch(submitAction(values))
        }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(SimpleForm)