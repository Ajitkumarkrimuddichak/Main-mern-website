import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from "./images/Ajit_Passport size photo.jpg";

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        //console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successfull");
            console.log("Registration Successfull");

            history.push("/login");
        }
    }


    return (
        <>
            <section className='signup'>
                <p className='pt-1 text-center text-success fs-2'> WELCOME SIGNUP PAGE</p>

                <div className="registration-form">
                    <form method='POST' className='register-form' id='register-form'>
                        <div className="form-icon">
                            <img src={logo} alt="image" className='logoimage rounded-circle' />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control item" name='name' id="name" placeholder="Your Name" autoComplete='off'
                                value={user.name}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control item" name='email' id="email" placeholder="Your Email" autoComplete='off'
                                value={user.email}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control item" name='phone' id="phone" placeholder="Mobile Number" autoComplete='off'
                                value={user.phone}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control item" name='work' id="work" placeholder="Your Profession" autoComplete='off'
                                value={user.work}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control item" name='password' id="password" placeholder="Password" autoComplete='off'
                                value={user.password}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control item" name='cpassword' id="cpassword" placeholder="Confirm Your Password" autoComplete='off'
                                value={user.cpassword}
                                onChange={handleInputs}
                            />
                        </div>
                        <div className="form-group text-center">
                            <input type="submit" name='signup' id='signup' className="form-submit create-account" value="register" onClick={PostData} />
                        </div>

                        <div className="form-group text-center mt-4">
                            <NavLink to="/login" className="create-account">I am already register</NavLink>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Signup
