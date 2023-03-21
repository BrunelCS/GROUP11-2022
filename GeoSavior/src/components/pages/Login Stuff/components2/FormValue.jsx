import { useState } from "react";
import "./formValue.css"

const FormValue = (props) => {
    const [focused, setFocused] = useState(false); 
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };


    return (
        <div className="formValue">
            <label>{label}</label>
            <input {...inputProps} 
            onChange={onChange} 
            onBlur={handleFocus} 
            onFocus={()=>
                inputProps.name==="confirmPassword"  && setFocused(true)}
            focused={focused.toString()} 
            />
            <span>{errorMessage}</span>
        </div>

    );
};

export default FormValue;