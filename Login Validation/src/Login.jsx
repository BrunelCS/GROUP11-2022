import { useState } from "react";
import { Link } from 'react-router-dom';
import FormValue from "./components2/FormValue";

const Login = () => {
   const [values,setValues] = useState({
    username:"",
    password:"",
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
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Please enter correct password",
      label:"Password",
      pattern: "^[A-Za-z]{2,30}",
      required: true,
    },    
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
        <h1>Login</h1>
      <p>Don't have an account?</p>
      <Link to = "/Register">
        <button className="LoginBtn">Register</button>
        </Link>
        
        {inputs.map((input) => (
          <FormValue
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
 export default Login;