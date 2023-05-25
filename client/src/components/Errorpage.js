import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return (
        <>
            <div id='notfond'>
                <div className='notfound'>
                    <div className='notfound-404'>
                        <h1>404</h1>
                    </div>
                    <h2>We are Sorry, This Page not Found!</h2>
                    <p className='mb-5'>The page you are looking for might have been removed
                        had its name changed or is temporarily unavailable.</p>

                    <NavLink className="fs-4 bg-success text-dark rounded-2 text-center" to="/">Back Homepage</NavLink>
                </div>
            </div>
        </>
    )
}

export default Errorpage
