import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './register.scss';
//import validation from './Validation';

//these imports allow me to use specific packages feature

function Register() {

        /*const [values,setValues] =useState({
            nickname: "",
            email:"",
            firstName:"",
            lastName:"",
            password:"", 
            })

            const [errors,setError] = useState({})

           function handleChange(e) {
            setValues({...values, [e.target.nickname] : e.target.value})
           }
           
           function handleSubmit(e) {
            e.preventDefault();
            setError(validation(values));
           }*/


    // found it difficult to use two onchange events with one input field 
    // so created another login page that did the error handling
    const [nicknameReg,setNicknameReg] = useState("")
    const [emailReg,setEmailReg] = useState("")  
    const [firstNameReg,setFirstNameReg] = useState("")
    const [lastNameReg,setLastNameReg] = useState("")
    const [passwordReg,setPasswordReg] = useState("")

    //declaring usestates statements so it can take input from the input fields 

    const addUser = () => {
      Axios.post('http://localhost:3002/create', {
        nickname: nicknameReg,
        email: emailReg,
        firstName: firstNameReg,
        lastName:lastNameReg,
        password: passwordReg,
    //this makes it so it can connect to the backend server and send the data to the right place using axios 

      }).then(()=>  {
        console.log("success");
      });
      //if correct data is sent the message success comes up 
    }; 
    
    return (  
          <div className='register'>
            <div className='card'> 
                <div className='left'>
                    <h1>GeoSaviour</h1>
                    <p>
                        This is the register page where you can make an account. 
                        Please enter the credentials required to create a new account.
                        This data will be stored.
                    </p>
                    <span>Already got an account</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                    
                </div>
                <div className='right'>
                <h1>Register</h1>
                <form >
                   <input type="text" placeholder='Nickname' //value={values.nickname}
                    name='nickname' onChange={(event) =>{
                     setNicknameReg(event.target.value); /*{handleChange}
                     {errors.nickname && <p style={{color: "red", fontSize: "13px"}}>{errors.nickname}</p>}*/
                   }} /> 
                   <input type="email" placeholder='Email' //value= {values.email}
                    name='email'  onChange={(event) =>{
                     setEmailReg(event.target.value); /*{handleChange}
                     {errors.email && <p style={{color: "red", fontSize: "13px"}}>{errors.email}</p>}*/
                   }} />
                   <input type="text" placeholder='First name' //value= {values.firstName}
                    name='firstName'  onChange={(event) =>{
                     setFirstNameReg(event.target.value);/*{handleChange}
                     {errors.firstName && <p style={{color: "red", fontSize: "13px"}}>{errors.firstName}</p>}*/
                   }}/>
                   <input type="text" placeholder='Last name' //value= {values.lastName} 
                   name='lastName'  onChange={(event) =>{
                     setLastNameReg(event.target.value);/*{handleChange}
                     {errors.lastName && <p style={{color: "red", fontSize: "13px"}}>{errors.lastName}</p>}*/
                   }}/>
                   <input type="password" placeholder='password'// value= {values.password} 
                   name='password'  onChange={(event) =>{
                     setPasswordReg(event.target.value);/*{handleChange}
                     {errors.password && <p style={{color: "red", fontSize: "13px"}}>{errors.password}</p>}*/
                   }}/>
                   
                   <button onClick={addUser}>Register</button>
                   
                </form>
                </div>
            </div>
          </div>
    );
};
export default Register;