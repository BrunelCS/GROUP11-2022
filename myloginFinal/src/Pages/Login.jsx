import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import './login.scss'
function Login(){

    const [nickname,setNickname] = useState("")
    const [password,setPassword] = useState("")  

 
   
    const login = () => {
        Axios.post('http://localhost:3003/login', {
          nickname: nickname,
          password: password,
  
        }).then((response)=>  {
          console.log(response);
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
