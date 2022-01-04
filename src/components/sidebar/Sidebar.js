import React from 'react';
import './Sidebar.css';
import Profile from '../profile/Profile';

const Sidebar = ({feedbackOpen}) => {
    return (
        <> 
            <div className='sidebar_section'>
            <div className='sidebar_profile'>
                <Profile/>
                </div>

                <div className='toggle_state mt-4'>
                    <h3>View Toggle</h3>
                    
                    <div className='toggle-view d-flex justify-content-between'>
                        <i class="fas fa-th toggle-icon"></i>
                        <i class="fas fa-list toggle-icon"></i>
                    </div>
                </div>

                <div className='sidebar_feedback'>
                    <h3>Have A Feedback?</h3>
                    <button onClick={feedbackOpen} className='listening'>We're Listening</button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;