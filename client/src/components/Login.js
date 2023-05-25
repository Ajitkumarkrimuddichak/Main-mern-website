import React, { useState } from 'react';
import logo from "./images/Ajit_Passport size photo.jpg";
import { NavLink, useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = res.json();


        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        } else {
            window.alert("Login  Successfull");

            history.push("/");
        }
    }


    return (
        <>
            <p className='pt-1 text-center text-success fs-2'>WELCOME LOGIN PAGE</p>

            <div className="form-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                            <div className="form-container">
                                <h3 className="title">Login Page</h3>
                                <form method='POST' className="form-horizontal">
                                    <div className="form-icon">
                                        <img src={logo} alt="image" className='logoimage rounded-circle' />
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="fa fa-user"></i></span>
                                        <input type="email" id='email' name='email' className="form-control" placeholder="Your Email"
                                            autoComplete='off'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="fa fa-lock"></i></span>
                                        <input type="password" id='password' name='password' className="form-control" placeholder="Password"
                                            autoComplete='off'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button type='submit' id='signup' name='signup' className="btn signin" value="Log In" onClick={loginUser}>Log In</button>
                                    </div>

                                    <div className="form-group text-center">
                                        <NavLink to="/signup" className="btn bg-dark create-account text-white">Create an Account</NavLink>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
