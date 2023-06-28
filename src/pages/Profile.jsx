import { Link } from "react-router-dom";
const Profile = () => {

    return(
        <>
            <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>Profile</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-body">
            <div className="container">
                <div className="event-modal event-profile">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="row">
                                <div className="col-xl-8 p-r-0">
                                    <div className="modal-right">
                                        <div className="media personal-profile">
                                            <img className="m-r-30 img-fluid" src="../assets/images/peoples/ppl.png" alt="placeholder image" />
                                            <div className="media-body">
                                                <h3 className="mt-0">Anamika</h3>
                                                <p className="denger"><i className="fa fa-map-marker"></i>Location</p>
                                                <p className="denger">www.yoursite.com</p>
                                                <p>Language : English</p>
                                            </div>
                                            <button className="btn btn-secondary">EDIT</button>
                                        </div>
                                        <div className="modal-about-area">
                                            <h3>ABOUT</h3>
                                            <p>
                                                Cras sed orci sodales enim porttitor feugiat et eget mi. Donec lorem dolor, ornare eget magna id, finibus sollicitudin augue. Nunc eleifend ullamcorper enim, eget rhoncus leo malesuada sed.
                                                Nam orci metus, volutpat eget est posuere, egestas suscipit nisi. Proin non turpis mollis, fermentum urna in, ornare leo. Nunc sollicitudin eu metus eget posuere.
                                            </p>
                                            <i className="fa fa-facebook"></i>
                                            <i className="fa fa-twitter"></i>
                                            <i className="fa fa-instagram"></i>
                                        </div>
                                        <div className="modal-tags">
                                            <h3>INTEREST</h3>
                                            <button className="btn btn-outline-secondary btn-rounded">FOOD</button>
                                            <button className="btn btn-outline-secondary btn-rounded">MUSIC</button>
                                            <button className="btn btn-outline-secondary btn-rounded">TECHNOLOGY</button>
                                            <button className="btn btn-outline-secondary btn-rounded">AWARDS</button>
                                        </div>
                                        <div className="modal-footer-area">
                                            <div className="row justify-content-between">
                                                <div className="col-auto">
                                                    <p><i className="fa fa-check-circle"></i>ACTIVITY</p>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="#">
                                                        <i className="fa fa-exclamation-triangle"></i>
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-trash"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 p-l-0">
                                    <div className="modal-left">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#home">EVENT ATTENDED</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#profile">EVENT CREATED</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel">
                                                <div className="media">
                                                    <img className="m-r-15 img-fluid" src="../assets/images/peoples/modl-ryt.jpg" alt="placeholder image" />
                                                    <div className="media-body">
                                                        <h3 className="mt-0">Anamika</h3>
                                                        <p><i className="fa fa-map-marker"></i>Location</p>
                                                        <span>22 June 2018</span>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <img className="m-r-15 img-fluid" src="../assets/images/peoples/modl-ryt2.jpg" alt="placeholder image" />
                                                    <div className="media-body">
                                                        <h3 className="mt-0">Anamika</h3>
                                                        <p><i className="fa fa-map-marker"></i>Location</p>
                                                        <span>22 June 2018</span>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <img className="m-r-15 img-fluid" src="../assets/images/peoples/modl-ryt3.jpg" alt="placeholder image" />
                                                    <div className="media-body">
                                                        <h3 className="mt-0">Anamika</h3>
                                                        <p><i className="fa fa-map-marker"></i>Location</p>
                                                        <span>22 June 2018</span>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <img className="m-r-15 img-fluid" src="../assets/images/peoples/modl-ryt4.jpg" alt="placeholder image" />
                                                    <div className="media-body">
                                                        <h3 className="mt-0">Anamika</h3>
                                                        <p><i className="fa fa-map-marker"></i>Location</p>
                                                        <span>22 June 2018</span>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <img className="m-r-15 img-fluid" src="../assets/images/peoples/modl-ryt5.jpg" alt="placeholder image" />
                                                    <div className="media-body">
                                                        <h3 className="mt-0">Anamika</h3>
                                                        <p><i className="fa fa-map-marker"></i>Location</p>
                                                        <span>22 June 2018</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="profile">
                                                <div className="media">
                                                    <img className="m-r-15 img-fluid" src="../assets/images/peoples/modl-ryt4.jpg" alt="placeholder image" />
                                                    <div className="media-body">
                                                        <h3 className="mt-0">Anamika</h3>
                                                        <p><i className="fa fa-map-marker"></i>Location</p>
                                                        <span>22 June 2018</span>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <img className="m-r-15 img-fluid" src="../assets/images/peoples/modl-ryt3.jpg" alt="placeholder image" />
                                                    <div className="media-body">
                                                        <h3 className="mt-0">Anamika</h3>
                                                        <p><i className="fa fa-map-marker"></i>Location</p>
                                                        <span>22 June 2018</span>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <img className="m-r-15 img-fluid" src="../assets/images/peoples/modl-ryt2.jpg" alt="placeholder image" />
                                                    <div className="media-body">
                                                        <h3 className="mt-0">Anamika</h3>
                                                        <p><i className="fa fa-map-marker"></i>Location</p>
                                                        <span>22 June 2018</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default Profile;