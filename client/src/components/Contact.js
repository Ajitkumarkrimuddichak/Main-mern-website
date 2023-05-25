import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='contact_info'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
                            {/* phone number */}
                            <div className='contact_info_item d-flex justify-content-start align-items-center'>
                                <img src="https://t4.ftcdn.net/jpg/04/63/63/59/360_F_463635929_H4y7oelFy8GVclf5XGKYe6N9OEi0Fjyn.jpg" alt="phone" className='im' />
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                        Phone
                                    </div>
                                    <div className='contact_info_text'>
                                        +91 1111 2222 3324
                                    </div>
                                </div>
                            </div>

                            <div className='contact_info_item d-flex justify-content-start align-items-center'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhG2pkLJVTywOqJM7wuwjYiJ5l51xWfyqj6QHs1hqRssuyneJKnVSGsrKytLilsQRRCo&usqp=CAU" alt="email" className='im' />
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                        Email
                                    </div>
                                    <div className='contact_info_text'>
                                        ajitkumar@gmail.com
                                    </div>
                                </div>
                            </div>

                            <div className='contact_info_item d-flex justify-content-start align-items-center'>
                                <img src="https://www.freeiconspng.com/thumbs/address-icon/address-icon-15.png" alt="address" className='im' />
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                        Address
                                    </div>
                                    <div className='contact_info_text'>
                                        Patna,Bihar
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* contact us form */}
            <dir className="contact_form mt-5">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1'>
                            <div className='contact_form_title text-center  mb-2'>
                                <span className='bg-info text-danger fs-4 rounded-2'> Get in Touch </span>
                            </div>
                            <form id='contact_form'>
                                <div className='contact_form_name d-flex justify-content-between align-items-between'>
                                    <input type="text" id='contact_form_name' className='conntact_form_name input_field' placeholder='Your Name' required='true' />

                                    <input type="email" id='contact_form_email' className='conntact_form_email input_field' placeholder='Your Email' required='true' />

                                    <input type="number" id='contact_form_phone' className='conntact_form_phone input_field' placeholder='Your Phone' required='true' />
                                </div>

                                <div className='contact_form_text mt-2'>
                                    <textarea className='text_field contact_form_message' placeholder='Message Here' cols="123" rows="5"></textarea>
                                </div>
                                
                                <div className='contact_form_button'>
                                    <button type='submit' className='bg-success text-white rounded-4 text-center'> Send Message </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dir>
        </>
    )
}

export default Contact
