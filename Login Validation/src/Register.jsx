import { useState } from "react";
import "./register.css";
import FormInput from "./components/FormInput";
import { Link } from "react-router-dom";

const Register = () => {


   const [values,setValues] = useState({
    username:"",
    firstName:"",
    surname:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
   }) 

   const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      label:"Username",
      pattern: "^[A-Za-z0-9]{3,16}",
      required: true,
    },    
    {
      id:2,
      name:"firstName",
      type:"text",
      placeholder:"First name",
      errorMessage:"Please enter your first name",
      label:"First name",
      pattern: "^[A-Za-z]{2,30}",
      required: true,
    },    
    {
      id:3,
      name:"surname",
      type:"text",
      placeholder:"Surname",
      errorMessage:"Please enter your surname",
      label:"Surname",
      pattern: "^[A-Za-z]{2,30}",
      required: true,
    },    
    {
      id:4,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email address!",
      label:"Email",
      required: true,
    },
    {
      id:5,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday",
    },  
    {
      id:6,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label:"Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id:7,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Passwords don't match!",
      label:"Confirm Password",
      pattern: values.password,
      required: true,
    }
   ]
  
  const handleSubmit = (e) => {
    e.preventDefault();

    };


    const onChange = (e)=>{
      setValues({...values, [e.target.name]: e.target.value });
    };



  console.log(values);  
  return (
    <div className="box">
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <p>Already got an account?</p>
        <Link to = "/login">
        <button className= "LoginBtn">Login</button>
        </Link>
        {inputs.map((input) => (
          <FormInput 
          key={input.id} 
          {...input} 
          value = {values[input.name]} 
          onChange={onChange}  
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Register;
