import React from 'react';
import './Users.css';
import Sidebar from '../sidebar/Sidebar';
import { useContext, useState } from 'react/cjs/react.development';
import CardPreviewOne from '../card/CardPreviewOne';
import { UserContext } from '../../contextApi/AppContext';
import CardPreviewTwo from '../card/CardPreviewTwo';

const Users = ({ userData }) => {
    const { toggleState, setToggleState } = useContext(UserContext);
    const [currentPage, setCurrentPage] = useState(6);

    const handleClickNext = () => {
        setCurrentPage(previousUser => previousUser + 6)
    }
    const handleClickPrevious = () => {
        setCurrentPage(previousUser => previousUser - 6)
    }
    
    return (
        <>
            <div className='row user_background pb-5'>
                <div className='col-lg-2 mr-md-4 col-md-2'>
                    <Sidebar/>
                </div>
                {
                    toggleState === 'horizental' ? <div className='col-lg-9 col-md-9 px-5 '>
                        <div className='row ml-5 my-4'>
                            {userData.slice(0, currentPage).map(user => <div className='col-lg-4 col-md-6  px-3 my-3'>
                                <CardPreviewOne user={ user} toggleState={toggleState} key={user.id} />
                            </div>)}
                        </div>
                        
                    </div> 
                        : toggleState === 'vertical' ?  <div className='col-lg-9 col-md-9 px-5 '>
                        <div className='row ml-5 my-4'>
                            {userData.slice(0, currentPage).map(user => <div className='col-lg-12 my-3 '>
                                <CardPreviewTwo user={ user} toggleState={toggleState} key={user.id}/>
                            </div>)}
                        </div>
                        
                    </div> : ''
                } 

                           <div className="d-block mx-auto">
                                <button type="button" className="btn btn-success mr-4" onClick={handleClickPrevious}>
                                    Previous
                            </button>
                                <button type="button" className="btn btn-success px-4" onClick={handleClickNext}>
                                    Next
                            </button>
                            </div>

            </div>
        </>
    );
};

export default Users;