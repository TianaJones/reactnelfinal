const Schedule = () => {
    return(
        <>
        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>Schedule</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <h4>Calendar</h4>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <a href="#" data-toggle="modal" data-target="#add-category" className="btn btn-primary btn-block calendar-btn"><i className="ti-plus f-s-12 m-r-5"></i> Create New</a>
                                        <div id="external-events" className="m-t-20">
                                            <p>Drag and drop your event or click in the calendar</p>
                                            <div className="external-event bg-primary" data-class="bg-primary"><i className="fa fa-move"></i>New Theme Release</div>
                                            <div className="external-event bg-success" data-class="bg-success"><i className="fa fa-move"></i>My Event</div>
                                            <div className="external-event bg-warning" data-class="bg-warning"><i className="fa fa-move"></i>Meet manager</div>
                                            <div className="external-event bg-dark" data-class="bg-dark"><i className="fa fa-move"></i>Create New theme</div>
                                        </div>

                                        <div className="checkbox m-t-40">
                                            <input id="drop-remove" type="checkbox" />
                                            <label for="drop-remove">Remove after drop</label>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-box">
                                            <div id="calendar"></div>
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
}
export default Schedule;