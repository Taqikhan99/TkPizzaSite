import React from 'react';
import '../styles/contact.css'
import pizza from '../assets/pizzaContact.jpg'
const Contact = () => {
    return (
        <div className='container-fluid'>
            <div className="imageSection" style={{backgroundImage:`url(${pizza})`}}>

            </div>
            {/* Form Sec */}
            <div className="formSection">
                <h1 className='text-center pt-3'>Contact Us</h1>
                <form>
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="email" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter full name" />

                    </div>
                    <div class="form-group">
                        <label for="email"></label>
                        <input type="password" class="form-control" id="email" placeholder="Enter your email" />
                    </div>

                    <div class="form-group">
                       
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Go ahead, We are listening" maxLength="200"></textarea>
                    </div>

                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;