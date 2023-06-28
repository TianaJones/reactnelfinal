import { Link } from "react-router-dom";
const MenuBar = () => {
    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <nav className="topbar-nav">
                            <ul className="metismenu" id="metismenu">
                                <li>
                                    <Link to={"/events"}> <span className="fa fa-calendar-check-o"></span> Events </Link>
                                </li>
                                <li>
                                    <Link to={"/games"}> <span className="fa fa-gamepad"></span> Game </Link>
                                </li>
                                <li>
                                    <Link to={"/guests"}> <span className="fa fa-users"></span> Guests </Link>
                                </li>
                                <li>
                                    <Link to={"/chat"}> <span className="fa fa-comment"></span> Chat </Link>
                                </li>
                                <li>
                                    <Link to={"/schedule"}> <span className="fa fa-calendar"></span> Schedule </Link>
                                </li>
                                <li>
                                    <Link to={"/shop"}> <span className="fa fa-shopping-bag"></span> Shop </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuBar;