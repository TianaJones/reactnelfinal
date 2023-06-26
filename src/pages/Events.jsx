const Events = () => {
    return(
       <>
        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>Events</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-body">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card event-card">
                                    <div className="card-header">
                                        <div className="media">
                                            <img className="mr-3 img-fluid" src="../assets/images/events/event-head.png" alt="placeholder image" />
                                            <div className="media-body">
                                                <h3 className="mt-0">By John Doe</h3>
                                                <p>5 min ago</p>
                                            </div>
                                            <div className="dropdown custom-dropdown">
                                                <div data-toggle="dropdown">
                                                    <i className="fa fa-ellipsis-v"></i>
                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Option 1</a>
                                                    <a className="dropdown-item" href="#">Option 2</a>
                                                    <a className="dropdown-item" href="#">Option 3</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-card-img">
                                        <img className="img-fluid" src="../assets/images/events/event-main.jpg" alt="placeholder image" data-toggle="modal" data-target="#evemt-view" />
                                        <h4>Event Name</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-auto">
                                                <h5>Date</h5>
                                                <p>June 16, 2018</p>
                                            </div>
                                            <div className="col-auto">
                                                <h5>Location</h5>
                                                <p>New York</p>
                                            </div>
                                            <div className="col-auto">
                                                <h5>Tickets</h5>
                                                <p>Avilable 26/ 100</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card event-card">
                                    <div className="card-header">
                                        <div className="media">
                                            <img className="mr-3 img-fluid" src="../assets/images/events/event-head2.png" alt="placeholder image" />
                                            <div className="media-body">
                                                <h3 className="mt-0">By John Doe</h3>
                                                <p>5 min ago</p>
                                            </div>
                                            <div className="dropdown custom-dropdown">
                                                <div data-toggle="dropdown">
                                                    <i className="fa fa-ellipsis-v"></i>
                                                </div>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Option 1</a>
                                                    <a className="dropdown-item" href="#">Option 2</a>
                                                    <a className="dropdown-item" href="#">Option 3</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-card-img">
                                        <img className="img-fluid" src="../assets/images/events/event-main2.jpg" alt="placeholder image" data-toggle="modal" data-target="#evemt-view" />
                                        <h4>Event Name</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-auto">
                                                <h5>Date</h5>
                                                <p>June 16, 2018</p>
                                            </div>
                                            <div className="col-auto">
                                                <h5>Location</h5>
                                                <p>New York</p>
                                            </div>
                                            <div className="col-auto">
                                                <h5>Tickets</h5>
                                                <p>Avilable 26/ 100</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 left-line">
                        <div className="event-sideber m-l-15">
                            <div className="event-sideber-category">
                                <h4>CATEGORIES</h4>
                                <ul>
                                    <li>
                                        <a href="#">All Categories</a>
                                    </li>
                                    <li>
                                        <a href="#">Art</a>
                                    </li>
                                    <li>
                                        <a href="#">Books</a>
                                    </li>
                                    <li>
                                        <a href="#">Food</a>
                                    </li>
                                    <li>
                                        <a href="#">Sports</a>
                                    </li>
                                    <li>
                                        <a href="#">Films</a>
                                    </li>
                                    <li>
                                        <a href="#">Awards</a>
                                    </li>
                                    <li>
                                        <a href="#">Men</a>
                                    </li>
                                    <li>
                                        <a href="#">Parties</a>
                                    </li>
                                    <li>
                                        <a href="#">Technology</a>
                                    </li>
                                    <li>
                                        <a href="#">Science</a>
                                    </li>
                                    <li>
                                        <a href="#">Women</a>
                                    </li>
                                    <li>
                                        <a href="#">Music</a>
                                    </li>
                                    <li>
                                        <a href="#">Comendy</a>
                                    </li>
                                    <li>
                                        <a href="#">Show</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
   }
   export default Events;