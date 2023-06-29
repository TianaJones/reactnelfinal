const Shop = () => {
    return(
        <>
            <div className="page-title">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <h1>Contact us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-body">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5">
                        <div className="card m-l-15">
                        <div class="card w-100">
                    <div class="card-header bg-danger text-light">
                        <h2>Login</h2>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="m-t-20">Full name</label>
                                        <input type="text" class="form-control" placeholder="Input Full name" />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="m-t-20">Email</label>
                                        <input type="text" class="form-control b-r-0" placeholder="Input your email" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="m-t-20">Message</label>
                                        <textarea class="form-control b-r-0" placeholder="input password" ></textarea>
                                    </div>
                                </div>
                                <button class="btn btn-danger m-t-50">Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                        </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="row">
                            <div className="col-xl-7 card">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="m-t-20">Fullname</label>
                                        <input type="text" className="form-control" placeholder="Enter your fullname"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="m-t-20">Your Email</label>
                                        <input type="text" className="form-control" placeholder="Enter your email"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="m-t-20">Message</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Type your Message"
                                            name='description'
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="btn btn-danger">SEND MESSSAGE</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-item-center d-flex">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe>
                    </div>
                </div>
            </div>
           </>
    )
    }
    export default Shop;