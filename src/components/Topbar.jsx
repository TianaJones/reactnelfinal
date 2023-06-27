import { Link } from "react-router-dom";
const Topbar = () => {
     return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                        <div className="logo">
                            <h2><Link to={"/"}>Eventify</Link></h2>
                        </div>
                        <span className="nav-control">
                            <i className="fa fa-bars"></i>
                        </span>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="header-search">
                            <form action="#">
                                <div className="form-group">
                                    <i className="icofont icofont-search"></i>
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <Link to={"/create-event"} className="btn btn-primary create-event-btn" >Create New Event</Link>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="header-user-profile">
                            <div className="dropdown">
                                <div data-toggle="dropdown">
                                    <img src="../assets/misc_img/image1.jpg" alt="profile" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
                                    <p className="ml-3">Nellie Jones</p>
                                </div>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link className="dropdown-item" to={"/profile"}>My Profile</Link>
                                    <Link className="dropdown-item" to={"/notifications"}>Notifications <span className="badge badge-danger">5</span></Link>
                                    <Link className="dropdown-item" to={"/settings"}>Settings</Link>
                                    <Link className="dropdown-item" to={"/"}>Logout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
};
export default Topbar;
