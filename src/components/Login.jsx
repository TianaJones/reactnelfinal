import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import { Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './Login.css';



const Login = () => {
  const [destination, setDestination] =useState("/Welcome")
  const [anchorEl, setAnchorEl] = useState(null);
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    handleLogin()
    handleMenuClose();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform validation or authentication logic here
    // You can check the userType, username, and password values
    // and perform appropriate actions based on the selected user type

    if (userType === 'user') {
      // Redirect to the user page
      
      
           
         setDestination("/Welcome")
      //        
      //        
      //set new state 
      
    } else if (userType === 'admin') {
      // Redirect to the admin page
      setDestination("/Invitation")
    
      
    }
  };

  return (
    <div className="login-page">
      <header>
        <h1>Eventify</h1>
        <div className="menu-icon" onClick={handleMenuOpen}>
          <MenuIcon />
        </div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleUserTypeSelect('user')}>User</MenuItem>
          <MenuItem onClick={() => handleUserTypeSelect('admin')}>Admin</MenuItem>
        </Menu>
      </header>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <Link to={destination}>
     <button >Login</button>
     </Link>

      {/* <button className="login-button" onClick={handleLogin}>
      <Link to= {destination}> Login </Link> */}
      {/* </button> */}
    </div>
  );
};



export default Login;































































// import { useState } from 'react';



// export function Login (){
//     const [isUser, setIsUser] = useState(true)
//     const [destination, setDestination] =useState("Admin")
//     const [button, setButton] = useState("text")

//         if (isUser  === true) {
//             setDestination("/Welcome")
//         }
//         else{
//             setDestination("/Invitation")
//         }

//         const handlechange = (event) => {
//             setRoute= (event.target.value)
//             console.log(event.target)
//         }


    
//     return (
//         <>
//             <header>
//                 <h1> Eventify</h1> 
//                 if{
//                    (button = text) {
//                     setButton (user)
//                    }
//                 }
//                 else{
//                     setButton(Admin)
//                 }
//                 <button><p>Admin</p>
//                 <p> User</p></button>
//             </header>
          
    
//             <div1>
//                 <label>name</label>
//                 <input type="text"/>

//                 <label>password</label>
//                 <input type="number"/>
//                 onchange ={handlechange}/>
//             <button onclick={() =>
//             setRoute(!Login)}

//                 >Login</button>
//                  <br />
//            <p>{Loginstate}</p> 
//             </div1>
//         </>
//     )
// }


// {/* <div>
//             <input type = "text" placeholder ="name" onchange ={handlechange}/>
//             <button onclick={() =>
//             setShowText(!showText)}></button>
//             <br />
//            <p>{Stringstate}</p> 
//         </div> */}