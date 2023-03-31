
const Validation = (values) => {
    let errors = {}

    if(!values.nickname){
        errors.nickname = "Name Required"
    }
    else if (values.nickname.length <2){
        errors.nickname= "Name must be more than 2 characters"
    }
    return errors;
}
export default Validation;