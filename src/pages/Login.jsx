const Login = () => {
    return(
        <>
        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>Eventify</h1>
                    </div>
                </div>
            </div>
        </div>
       <div className="content-body">
               <div className="container">
                   <div className="row creat-event justify-content-center align-items-center">
                   <div class="card w-50">
                    <div class="card-header">
                        <h2>Login</h2>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="m-t-20">USERNAME</label>
                                        <input type="text" class="form-control" placeholder="Input username" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="m-t-20">PASSWORD</label>
                                        <input type="password" class="form-control b-r-0" placeholder="input password" />
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
           </div>
           </>
    )
   }
export default Login;