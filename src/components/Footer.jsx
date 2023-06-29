import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>
            Eventify is a premier platform for all your event booking needs! Whether you're planning a corporate function, a milestone celebration, or a special occasion, we're here to help you bring your vision to life.
            </p>
          </div>
          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
                <li>
                    <Link to={"/events"}> <span className="fa fa-calendar-check-o"></span> Events </Link>
                </li>
                <li>
                    <Link to={"/games"}> <span className="fa fa-gamepad"></span> Game </Link>
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
                <li>
                    <Link to={"/contact"}> <span className="fa fa-map-marker"></span> Contact </Link>
                </li>
            </ul>
          </div>
          <div className="col-md-3">
                <h4>Contact Us</h4>
                <p className="ml-2"><i className="fa fa-phone mr-2"></i> 980 456231 444</p>
                <p className="ml-2"><i className="fa fa-envelope mr-2"></i> hello@eventify.com</p>
                <p className="ml-2"><i className="fa fa-map-marker mr-2"></i> Gutenhiem, Germany</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #18212C;
          padding: 30px 0;
          color: #fff;
        }

        .footer h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .footer ul li {
          margin-bottom: 10px;
        }

        .footer a {
          color: #fff;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
