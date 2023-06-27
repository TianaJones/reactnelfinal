import { Link } from "react-router-dom";
const Home = () => {
 return(
    <>
    <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>Welcome</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-body">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                <div className="card">
                <div className="card-body">
                    <div className="">
                            <h3 className="text-center">WELCOME TO EVENTIFY!!</h3>
                            <p>Eventify is a premier platform for all your event booking needs! Whether you're planning a corporate function, a milestone celebration, or a special occasion, we're here to help you bring your vision to life. Our extensive selection of venues, entertainers, and services ensures that you'll find the perfect elements to make your event truly remarkable. With our user-friendly interface and dedicated support team, booking your dream event has never been easier. Get ready to embark on a journey of exceptional experiences with Eventify. Let's turn your event into an unforgettable success!</p>
                            <div className="text-center">
                                <Link to={"/events"}><button className="btn btn-danger">Proceed to event <i className="fa fa-arrow-right"></i></button></Link>
                            </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
        </>
 )
}
export default Home;