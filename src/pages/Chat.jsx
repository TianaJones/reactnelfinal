const Chat = () => {
    return(
        <>
        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <h1>Chat</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-body">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4">
                        <div class="event-msg-left">
                            <ul class="list-group">
                                <li class="list-group-item msg-single">
                                    <div class="event-sideber-search">
                                        <form action="#" method="post">
                                            <input type="text" class="form-control" placeholder="Search chat" />
                                            <i class="fa fa-search"></i>
                                        </form>
                                    </div>
                                </li>
                                <li class="list-group-item msg-single active">
                                    <div class="media">
                                        <img class="mr-3 img-fluid" src="../assets/images/message/msgr2.png" alt="placeholder image" />
                                        <div class="media-body">
                                            <h3 class="mt-0">Jassica</h3>
                                            <p>Sed elementum libero...</p>
                                        </div>
                                        <div class="time">
                                            <h5>07.50 PM</h5>
                                            <span class="bg-danger">2</span>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item msg-single">
                                    <div class="media">
                                        <img class="mr-3 img-fluid" src="../assets/images/message/msgr3.png" alt="placeholder image" />
                                        <div class="media-body">
                                            <h3 class="mt-0">Anamika</h3>
                                            <p>Cras sed orci sodales...</p>
                                        </div>
                                        <div class="time">
                                            <h5>07.50 PM</h5>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item msg-single">
                                    <div class="media">
                                        <img class="mr-3 img-fluid" src="../assets/images/message/msgr4.png" alt="placeholder image" />
                                        <div class="media-body">
                                            <h3 class="mt-0">Rock</h3>
                                            <p>Hey, how are you!</p>
                                        </div>
                                        <div class="time">
                                            <h5>07.50 PM</h5>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item msg-single">
                                    <div class="media">
                                        <img class="mr-3 img-fluid" src="../assets/images/message/msgr5.png" alt="placeholder image" />
                                        <div class="media-body">
                                            <h3 class="mt-0">Johnson</h3>
                                            <p>Sed elementum libero...</p>
                                        </div>
                                        <div class="time">
                                            <h5>07.50 PM</h5>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item msg-single">
                                    <div class="media">
                                        <img class="mr-3 img-fluid" src="../assets/images/message/msgr6.png" alt="placeholder image" />
                                        <div class="media-body">
                                            <h3 class="mt-0">Arrohi</h3>
                                            <p>Cras sed orci sodales en...</p>
                                        </div>
                                        <div class="time">
                                            <h5>07.50 PM</h5>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item msg-single">
                                    <div class="media">
                                        <img class="mr-3 img-fluid" src="../assets/images/message/msgr7.png" alt="placeholder image" />
                                        <div class="media-body">
                                            <h3 class="mt-0">Andy William</h3>
                                            <p>Sed elementum libero...</p>
                                        </div>
                                        <div class="time">
                                            <h5>07.50 PM</h5>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item msg-single">
                                    <div class="media">
                                        <img class="mr-3 img-fluid" src="../assets/images/message/msgr8.png" alt="placeholder image" />
                                        <div class="media-body">
                                            <h3 class="mt-0">Akash</h3>
                                            <p>Cras sed sodales enim...</p>
                                        </div>
                                        <div class="time">
                                            <h5>07.50 PM</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        <div class="event-chat-ryt">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <div class="media">
                                        <div class="media-img">
                                            <img class="mr-3 img-fluid" src="../assets/images/message/msgr2.png" alt="placeholder image" />
                                        </div>
                                        <div class="media-body">
                                            <h3 class="mb-0">Jassica</h3>
                                            <p>Online</p>
                                        </div>
                                        <div class="dropdown custom-dropdown">
                                            <div data-toggle="dropdown">
                                                <i class="fa fa-ellipsis-v msg-btn"></i>
                                            </div>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <a class="dropdown-item" href="#">Option 1</a>
                                                <a class="dropdown-item" href="#">Option 2</a>
                                                <a class="dropdown-item" href="#">Option 3</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="char-area">
                                        <div class="chat-reciver">
                                            <h4>Hey How are you?</h4>
                                            <p>8.00 PM</p>
                                        </div>
                                        <div class="chat-sender">
                                            <h4>Hey I am fine. you?</h4>
                                            <p>8.05 PM</p>
                                        </div>
                                        <div class="chat-reciver">
                                            <h4>Sed elementum libero mattis velit pulvinar, ut sodale ex euismod. In in imperdiet purus, a molestie ante. Nullam a vestibulum diam, et commodo quam.</h4>
                                            <p>8.10 PM</p>
                                        </div>
                                        <div class="chat-sender">
                                            <h4>ok Sir</h4>
                                            <p>8.20 PM</p>
                                        </div>
                                    </div>
                                    <div class="char-type">
                                        <form class="d-flex justify-content-center" action="#" method="post">
                                            <input type="text" class="form-control" placeholder="Type Here..." />
                                            <button class="btn btn-danger">SEND</button>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Chat;