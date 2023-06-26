const Topbar = () => {
     return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                        <div className="logo">
                            <h2><a href="index.html">Eventify</a></h2>
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
                        <a href="#" className="btn btn-primary create-event-btn" data-toggle="modal" data-target="#creat-event">Create New Event</a>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="header-user-profile">
                            <div className="dropdown">
                                <div data-toggle="dropdown">
                                    <img src="../assets/misc_img/image1.jpg" alt="profile" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
                                    <p className="ml-3">Nellie Jones</p>
                                </div>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">My Profile</a>
                                    <a className="dropdown-item" href="#">Notifications <span className="badge badge-danger">5</span></a>
                                    <a className="dropdown-item" href="#">Event Created</a>
                                    <a className="dropdown-item" href="#">Event Attended </a>
                                    <a className="dropdown-item" href="#">Elements</a>
                                    <a className="dropdown-item" href="#">Logout</a>
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
