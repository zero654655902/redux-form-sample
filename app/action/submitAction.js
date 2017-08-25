// export function submitAction(values){
//     console.log('3')
//     return{
//         type:'SUBMIT',
//         values
//     }
// }

import superagenet from "superagent";
import async from "async";
function submitForm(values) {
    console.log(values)
    console.log('3')
    return (dispatch) => {
        async.waterfall([(done) => {
            superagenet.post("/")
                .send(values)
                .end(function (err, res) {
                    done(err, res.body);
                })
        }], (err, data) => {
            if (err) {
                return err;
            }
            dispatch(saveForm(data));

        })
    }
}


function saveForm(data) {
    return {
        type: "SUBMIT",
        data
    }
}

module.exports = {
    submitForm: submitForm
};