const CreateEvent = () => {
    return(
        <>
        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>Create Event</h1>
                    </div>
                </div>
            </div>
        </div>
       <div className="content-body">
               <div className="container">
                   <div className="row creat-event">
                   <div class="card">
                    <div class="card-header">
                        <h2>CREATE EVENT</h2>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-7">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="m-t-20">TITLE</label>
                                        <input type="text" class="form-control" placeholder="Music Awards" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="m-t-20">DESCRIPTION</label>
                                        <textarea
                                            class="form-control"
                                            placeholder="In eu urna enim. Cras hendrerit ullamcorper malesuada. In justo lacus, pharetra nec imperdiet sed, congue at metus. Mauris eleifend nec neque in pretium. Nulla eleifend, enim ultrices ultrices ullamcorper."
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <label class="m-t-20">DAY</label>
                                        <div class="input-group clockpicker">
                                            <input type="text" class="form-control" value="15 June 2018" />
                                            <span class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="fa fa-clock-o"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="m-t-20">HOUR</label>
                                        <div class="input-group clockpicker">
                                            <input type="text" class="form-control" value="10 am" />
                                            <span class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="fa fa-clock-o"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="m-t-20">MINUTE</label>
                                        <div class="input-group clockpicker">
                                            <input type="text" class="form-control" value="15 m" />
                                            <span class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="fa fa-clock-o"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="m-t-20">DURATION</label>
                                        <div class="input-group clockpicker">
                                            <input type="text" class="form-control" value="2 h 45 m" />
                                            <span class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="fa fa-clock-o"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="m-t-20">LOCATION</label>
                                        <div class="input-group clockpicker">
                                            <input type="text" class="form-control b-r-0" value="New York City" />
                                            <span class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="fa fa-crosshairs"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5">
                                <label class="m-t-20">ADD SPONSORS</label>
                                <form class="search-area" action="#" method="post">
                                    <input type="text" class="form-control" placeholder="Search Location" />
                                    <i class="fa fa-search"></i>
                                </form>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="m-t-20">ADD GUEST</label>
                                        <div class="input-group clockpicker">
                                            <input type="text" class="form-control b-r-0" value="Search location" />
                                            <span class="input-group-append">
                                                <span class="input-group-text">
                                                    <i class="fa fa-clock-o"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="m-t-20" for="val-skill">SET REMINDER</label>
                                        <select class="form-control" id="val-skill" name="val-skill">
                                            <option value>Please select</option>
                                            <option value="html">HTML</option>
                                            <option value="css">CSS</option>
                                            <option value="javascript">JavaScript</option>
                                        </select>
                                    </div>
                                </div>
                                <button class="btn btn-danger m-t-50">CREATE EVENT</button>
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
export default CreateEvent;