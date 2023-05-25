import React from 'react';
import logo from "./images/aj.png.jpg";
import ajit from "./images/Ajit_Passport size photo.jpg";

const Home = () => {
    return (
        <>
            <p className='pt-5 text-center fs-2'>WELCOME HOME PAGE AJIT KUMAR </p>
            <h1 className='text-center fs-4'>We Are The <span className='mern'>MERN Stack </span>  Developer</h1>
            <img className='image' src={logo} alt="imag" />

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div className="col">
                    <div className="card h-100">
                        <img src={ajit} className="card-img-top" alt="ajitimag" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={ajit} className="card-img-top" alt="ajitimag" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={ajit} className="card-img-top" alt="ajitimag" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home


