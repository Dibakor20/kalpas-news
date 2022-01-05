import React, { useContext } from 'react';
import './Sidebar.css';
import Profile from '../profile/Profile';
import { UserContext } from '../../contextApi/AppContext';

const Sidebar = () => {

    const { toggleState, setToggleState ,drawerState, setDrawerState } = useContext(UserContext);

    const handleChangeHorizental= () => {
        setToggleState('horizental');
      };
      const handleChangeVerticle = () => {
        setToggleState('vertical');
    };
    
    const feedbackOpen = () => {
        setDrawerState(true)
      }
    
    return (
        <> 
            <div className='sidebar_section'>
            <div className='sidebar_profile'>
                <Profile/>
                </div>

                <div className='toggle_state mt-4'>
                    <h3>View Toggle</h3>
                    
                    <div className='toggle-view d-flex justify-content-between'>
                     <button className='toggle-button-one' style={{ backgroundColor: toggleState === 'horizental' && '#97eec8' }} onClick={handleChangeHorizental}><i class="fas fa-th toggle-icon"></i></button>   
                      <button className='toggle-button-two' style={{ backgroundColor: toggleState === 'vertical' && '#97eec8' }}  onClick={handleChangeVerticle}><i class="fas fa-list toggle-icon"></i></button>  
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