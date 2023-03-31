import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import './login.scss'
//imports are used so that you can use specific packages that have been installed 

function Login(){

    const [nickname,setNickname] = useState("")
    const [password,setPassword] = useState("")  
    //UseState functions used so variables values can be changed due to the input the uer enters

 
   
    const login = () => {
        Axios.post('http://localhost:3002/login', {
          nickname: nickname,
          password: password,
    //These are the variables that the frontend login page is sending to the backend
        }).then((response)=>  {
          console.log(response);
          //this test that the right values are sent back
        });
  
      }; 
    return (  
          <div className='login'>
            <div className='card'> 
                <div className='left'>
                    <h1>GeoSaviour</h1>
                    <p>
                    This is the login page for the website.
                    </p>
                    <span>Don't have an account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>
                <div className='right'>
                <h1>Login</h1>
                <form>
                   <input type="text" placeholder='Nickname'
                   onChange={(event) =>{
                     setNickname(event.target.value)
                     //onChange events sends a value that the user entered to the variable setNickname
                   }} /> 
                   
                   <input type="password" placeholder='password'
                   onChange={(event) =>{
                     setPassword(event.target.value)}} />
                   <button type="button" onClick={login}>Login</button>
                </form>
                </div>
            </div>
          </div>
    );
};
 
export default Login;
