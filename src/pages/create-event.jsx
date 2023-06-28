import { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
    const [event, setEvent] = useState({
        title: '',
        description: '',
        day: '',
        hour: '',
        minute: '',
        duration: '',
        location: '',
        sponsor: '',
        guest: '',
        reminder: '',
      });
    
      const handleInputChange = (e) => {
        setEvent({
          ...event,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleCreateEvent = () => {
        // Send the event data to the json-server API
        axios.post('http://localhost:3001/events', event)
        .then(response => {
        alert('Event created and saved to JSON server:', response.data);
        })
        .catch(error => {
        alert('Error creating event:', error);
        });
      };
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
                   <div className="card">
                    <div className="card-header">
                        <h2>CREATE EVENT</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="m-t-20">TITLE</label>
                                        <input type="text" className="form-control" name="title" placeholder="Music Awards" value={event.title}
                                        onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="m-t-20">DESCRIPTION</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="In eu urna enim. Cras hendrerit ullamcorper malesuada. In justo lacus, pharetra nec imperdiet sed, congue at metus. Mauris eleifend nec neque in pretium. Nulla eleifend, enim ultrices ultrices ullamcorper."
                                            name='description'
                                            value={event.description}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="m-t-20">DAY</label>
                                        <div className="input-group clockpicker">
                                            <input type="text" className="form-control" name='day' value={event.day}
                                            onChange={handleInputChange}
                                            />
                                            <span className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-clock-o"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="m-t-20">HOUR</label>
                                        <div className="input-group clockpicker">
                                            <input type="text" name='hour' className="form-control" value={event.hour}
                                            onChange={handleInputChange} />
                                            <span className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-clock-o"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="m-t-20">MINUTE</label>
                                        <div className="input-group clockpicker">
                                            <input type="text" name='minute' className="form-control" value={event.minute}
                                            onChange={handleInputChange} />
                                            <span className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-clock-o"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="m-t-20">DURATION</label>
                                        <div className="input-group clockpicker">
                                            <input type="text" name='duration' className="form-control" value={event.duration}
                                            onChange={handleInputChange}/>
                                            <span className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-clock-o"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="m-t-20">LOCATION</label>
                                        <div className="input-group clockpicker">
                                            <input type="text" name='location' className="form-control b-r-0" value={event.location}
                                            onChange={handleInputChange}/>
                                            <span className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-crosshairs"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <label className="m-t-20">ADD SPONSOR</label>
                                <form className="search-area" action="#" method="post">
                                    <input type="text" className="form-control" name='sponsor' placeholder="Sponsor" value={event.sponsor}
                                            onChange={handleInputChange}/>
                                    <i className="fa fa-user"></i>
                                </form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="m-t-20">ADD GUEST</label>
                                        <div className="input-group clockpicker">
                                            <input type="text" className="form-control b-r-0" name='guest' value={event.day}
                                            onChange={handleInputChange}/>
                                            <span className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="m-t-20" >SET REMINDER</label>
                                        <select className="form-control" name="reminder" value={event.reminder}
                                            onChange={handleInputChange}>
                                            <option value>Please select</option>
                                            <option value="html">day before</option>
                                            <option value="css">2 hours before</option>
                                            <option value="javascript">30 mins before</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="btn btn-danger m-t-50" onClick={handleCreateEvent}>CREATE EVENT</button>
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