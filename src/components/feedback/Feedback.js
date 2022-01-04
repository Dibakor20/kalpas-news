import React from 'react';
import Profile from '../profile/Profile';
import './Feedback.css';
import FeedbackForm from './FeedbackForm';

const Feedback = ({drawerState,feedbackClose}) => {
    
    return (
        <>
            {
                drawerState ?  <div className='feedback_section'>
                <div className='feedback'>
                    <div className='close'>
                    <button className='close-button' onClick={feedbackClose}><i class="fas fa-times"></i></button>
                    </div>
                    <div className='row p-5'>
                        <div className='col-lg-4'>
                            <Profile />
                            <div className='sidebar_feedback mt-5'>
                        <h3>Have A Feedback?</h3>
                        <button className='listening-color'>We're Listening</button>
                    </div>
                        </div>
                        <div className='col-lg-8 col-sm-12'>
                         <FeedbackForm/>
                        </div>
                       
                    </div>
                </div>
            </div> : null
           }
        </>
    );
};

export default Feedback;