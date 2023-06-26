const MenuBar = () => {
    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <nav className="topbar-nav">
                            <ul className="metismenu" id="metismenu">
                                <li>
                                    <a href="#" aria-expanded="false"> <span className="fa fa-calendar-check-o"></span> Events </a>
                                </li>
                                <li>
                                    <a href=""> <span className="fa fa-gamepad"></span> Games </a>
                                </li>
                                <li>
                                    <a href=""> <span className="fa fa-users"></span> Guests </a>
                                </li>
                                <li>
                                    <a href="" aria-expanded="false"> <span className="fa fa-envelope"></span> Messages </a>
                                </li>
                                <li>
                                    <a href="calender.html"> <span className="fa fa-calendar"></span> Schedule </a>
                                </li>
                                <li>
                                    <a href="" aria-expanded="false"> <span className="fa fa-shopping-bag"></span> Shop </a>
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