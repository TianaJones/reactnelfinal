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
                <div className="row d-flex justify-content-center align-items-center">
                <div className="card w-90">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-8 p-r-0">
                            <div className="card text-white m-b-0">
                                <img className="card-img" src="../assets/images/modal/event.jpg" alt="Card image" style={{height: "400px"}}/>
                                <div className="card-img-overlay">
                                    <div className="row justify-content-between">
                                        <div className="col-auto">
                                            <h2 className="m-t-5">Nelly's Birthday party</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-l-0">
                            <div className="card box-0 m-b-0">
                                <div className="test p-5">
                                    <div className="external-event bg-primary" data-className="bg-primary"><i className="fa fa-move"></i>Prayers</div>
                                    <div className="external-event bg-success" data-className="bg-success"><i className="fa fa-move"></i>Opening remark</div>
                                    <div className="external-event bg-warning" data-className="bg-warning"><i className="fa fa-move"></i>Game</div>
                                    <div className="external-event bg-dark" data-className="bg-dark"><i className="fa fa-move"></i>Cutting of cake</div>
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