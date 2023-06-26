// import './App.css';
// import {Login} from "components/form";
// import {Invitation} from "components/create";
// import {Welcome} from "components/Greetings";
// import {Guest} from "pages/Guest";

// function App() {
//   return (
//     <div className="App">
//       <Login/>
//       <Invitation/>
//       <Welcome/>
//       <Guest/>
//     </div>
//   );
// }

// export default App;
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages to jump to
import Login from "./components/Login";
import { Invitation } from "./components/Invitation";
import  Welcome  from "./components/Welcome";
import { AgendaofEvent } from "./pages/AgendaofEvent.js";
import { Guest } from "./pages/Guest";
import { Shop } from "./pages/Shop.js";
import { Menu } from "./pages/Menu.js";
import { Chatme } from "./pages/Chatme.js";
import { Contact } from "./pages/contact.js";
import { Game } from "./pages/Game.js";

import { Navbar } from "./components/Navbar";


// need to install : npm install react-router-dom
function App() {
  return (
    <div className="App">
      {/* this is where the routes shall be in the code - Router */}
      <Router>
        {/* adding our component Navbar fixed on top */}

        {/* here now the different pages incl. path to jump to and change screen below Navbar */}
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/Invitation" element={<><Invitation /></>} />
          <Route path="/Welcome" element={<><Welcome /></>} />
          <Route path="/AgendaofEvent" element={<><Navbar /><AgendaofEvent/></>} />
          <Route path="/Menu" element={<><Navbar /><Menu /></>} />
          <Route path="/Guest" element={<><Navbar /><Guest /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /></>} />
          <Route path="/Game" element={<><Navbar /><Game /></>} />
          <Route path="/Shop" element={<><Navbar /><Shop /></>} />
          <Route path="/Chatme" element={<><Navbar /><Chatme /></>} />




          {/* having a error page when no path found */}
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

