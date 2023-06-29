import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import CreateEvent from "./pages/create-event";
import Invitation from "./pages/invitation";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Schedule from "./pages/Schedule";
import Profile from "./pages/Profile";
import Game from "./pages/Game";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      {/* this is where the routes shall be in the code - Router */}
      <Router>
        {/* adding our component Navbar fixed on top */}

        {/* here now the different pages incl. path to jump to and change screen below Navbar */}<Routes>
          <Route path="/" element={<><Topbar /><MenuBar /><Home /><Footer/></>} />
          <Route path="/home" element={<><Topbar /><MenuBar /><Home /><Footer/></>} />
          <Route path="/home" element={<><Topbar /><MenuBar /><Home /><Footer/></>} />
          <Route path="/create-event" element={<><Topbar /><MenuBar /><CreateEvent /><Footer/></>} />
          <Route path="/invitation" element={<><Topbar /><MenuBar /><Invitation /><Footer/></>} />
          <Route path="/events" element={<><Topbar /><MenuBar /><Events /><Footer/></>} />
          <Route path="/chat" element={<><Topbar /><MenuBar /><Chat /><Footer/></>} />
          <Route path="/contact" element={<><Topbar /><MenuBar /><Contact /><Footer/></>} />
          <Route path="/shop" element={<><Topbar /><MenuBar /><Shop /><Footer/></>} />
          <Route path="/schedule" element={<><Topbar /><MenuBar /><Schedule /><Footer/></>} />
          <Route path="/profile" element={<><Topbar /><MenuBar /><Profile /><Footer/></>} />
          <Route path="/games" element={<><Topbar /><MenuBar /><Game /><Footer/></>} />
          <Route path="/menu" element={<><Topbar /><MenuBar /><Menu /><Footer/></>} />
          <Route path="/login" element={<><Login /></>} />
          {/* having a error page when no path found */}
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

