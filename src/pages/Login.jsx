import React, { useState } from 'react';
import { useNavigate,Link } from "react-router-dom"; 
import db from '../data/db.json' ;
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const users = db.users;
  const handleLogin = () => {

    const auth = users.find(user => user.name === username && user.password === password);
    console.log(auth);
    if(auth){
      if (auth.type === 'user') {
           
         navigate("/")
        
      
        } else if (auth.type === 'admin') {
        // Redirect to the admin page
        navigate("/Invitation")
    
      
      }
    }else{
      alert("Invalid username or password.");
    }
  };
    return(
        <>
        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Link to={"/"}><img src="../assets/images/logo.webp" alt="logo" className='logo'/></Link>
                    </div>
                </div>
            </div>
        </div>
       <div className="content-body">
               <div className="container">
                   <div className="row creat-event justify-content-center align-items-center">
                   <div class="card w-50">
                    <div class="card-header bg-danger text-light">
                        <h2>Login</h2>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="m-t-20">USERNAME</label>
                                        <input type="text" class="form-control" value={username} placeholder="Input username" onChange={e => setUsername(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="m-t-20">PASSWORD</label>
                                        <input type="password" value={password} class="form-control b-r-0" placeholder="input password" onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <button class="btn btn-danger m-t-50" onClick={handleLogin}>Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                   </div>
               </div>
           </div>
           </>
    )
   }
export default Login;