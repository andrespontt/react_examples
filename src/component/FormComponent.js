import React from 'react';
import '../dark-mode.css';

const FormComponent = () => {
    return (
        <form className="dark-mode">
            <div className="form-row align-items-center">
                <div className="col-auto">
                    
                    <input type="text" className="form-control mb-2" id="name" placeholder="Enter your name" />
                </div>
                <div className="col-auto">
                    
                    <input type="email" className="form-control mb-2" id="email" placeholder="Enter your email" />
                </div>
                <div className="col-auto">
                    
                    <textarea className="form-control mb-2" id="message" rows="1" placeholder="Enter your message"></textarea>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default FormComponent;