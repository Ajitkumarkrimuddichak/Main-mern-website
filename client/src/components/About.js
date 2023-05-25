import React, { useEffect } from 'react'
import ajit from "./images/Ajit_Passport size photo.jpg";
import { useHistory } from 'react-router-dom';

const About = () => {

  const history = useHistory();

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const err = new Error(res.error);
        throw err;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  }


  useEffect(() => {
    callAboutPage();
  }, []);



  return (
    <>
      <div className='container mt-5'>
        <form method="GET">
          <div className='row ajit1'>
            <div className='col-md-4'>
              <img src={ajit} alt="ajit" className='ajit' />
            </div>

            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>Ajit Kumar</h5>
                <h6>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>RANKING: <span>1/10</span></p>

                <ul className='nav nav-tabs' role="tablist">
                  <li className='nav-item'>
                    <a className='nav-link active bg-black text-white' id='home-tab' data-toggle='tab' href="#home" role="tab" aria-controls='homr' aria-selected='home'>About</a>
                  </li>

                  <li className='nav-item'>
                    <a className='nav-link active bg-danger text-white' id='profile-tab' data-toggle='tab' href="#profile" role="tab" aria-controls='profile' aria-selected='profile'>Timeline</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-2'>
              <input type="submit" className='profile-edit-btn rounded-pill bg-success mt-2' name='btnAddMore' value="Edit Profile" />
            </div>
          </div>



          <div className='row'>
            {/* left side url */}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p className='bg-success'>WORK LINK</p>
                <a href="htttpp">Website link</a><br />
                <a href="htttpp">youtube link</a><br />
                <a href="htttpp">No link</a><br />
                <a href="htttpp">Fb link</a><br />
                <a href="htttpp">Insta link</a><br />
                <a href="htttpp">patna link</a><br />
                <a href="htttpp">Google link</a><br />
              </div>
            </div>


            {/* right side data toogle */}
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role="tabpanel" aria-labelledby="home-tab">

                  <div className='row'>
                    <div className='col-md-6'>
                      <label className='bg-danger'>User ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p className='bg-success'>787665457778</p>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Ajit kumar</p>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Ajit kumar</p>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Ajit kumar</p>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Ajit kumar</p>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Ajit kumar</p>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Ajit kumar</p>
                    </div>
                  </div>
                </div>



                <div className='tab-pane fade' id='profile' role="tabpanel" aria-labelledby="profile-tab">
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>User ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p>787665457778</p>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>mukul kumar</p>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Mukul kumar</p>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>mukul kumar</p>
                    </div>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>mukul kumar</p>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Ajit kumar</p>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>mukul kumar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About
