import React from 'react';

const FeedbackForm = () => {
    return (
        <>
            <div className="feedback_Form_section">
            <h3>Thank you so much for taking the time!</h3>
            <span>Please provide the below details</span>
            <div className="feedback_form">
                     <form>
                 <div className="form-group">
                     <label for="FirstName">First Name:</label>
                     <input type="text" class="form-control" id="" placeholder="John" required/>
                 </div>
                 <div className="form-group">
                     <label for="LastName">Last Name:</label>
                     <input type="text" class="form-control" id="" placeholder="Doe" required/>
                 </div>
                 <div className="form-group">
                     <label for="Adress">Adress:</label>
                     <textarea class="form-control" id="description" placeholder="Enter your full postal adress" required/>
                 </div>
                 <div className="form-group">
                     <label for="country">Country:</label>
                     <input type="country" class="form-control" id="" placeholder="India" required/>
                     
                     
                 </div>
                 <div className="form-group">
                     <label for="email">Email Id:</label>
                     <input type="email" class="form-control" id="" placeholder="example@sample.com" required/>
                 </div>
                 <div className="form-group">
                 <label for="email">Phone Number:</label>
                         <input type="number" class="form-control" id="" placeholder="+12345" required/>
                        </div>
                        <button type="submit" className="btn btn-success">
            Submit Feedback
          </button>
             </form>
            </div>
            </div>
        </>
    );
};

export default FeedbackForm;