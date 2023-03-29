//this file allows for the validation to handle errors when entering things into the input field
const Validation = (values) => {
    let errors = {}

    if(!values.nickname){
        errors.nickname = "Name Required"
    //message that says name required if input field is left empty 
    }
    else if (values.nickname.length <2){
        errors.nickname= "Name must be more than 2 characters"
    }
    return errors;
}
export default Validation;