import { Link } from "react-router-dom"; // import link component

export const Navbar = () => {
  return (
    <div className="Navbar">
      {/* using Link to adress the different pages like defined before in <Routes> */}
      {/* <Link to="/Login"> Login </Link>
      <Link to="/Invitation"> Invitation </Link>
      <Link to="/Welcome"> Welcome </Link> */}
      <Link to="/AgendaofEvent"> AgendaofEvent</Link>
      <Link to="/Shop"> Shop </Link>
      <Link to="/Game">Game</Link>
      <Link to="/chatme"> Chatme </Link>
      <Link to="/Menu"> Menu </Link>
      {/* <Link to="/Guest"> Guest </Link> */}
    </div>
  );
};