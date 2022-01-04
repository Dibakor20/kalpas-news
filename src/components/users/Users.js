import React from 'react';
import './Users.css';
import Sidebar from '../sidebar/Sidebar';

const Users = () => {
    return (
        <>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar/>
                </div>
                <div className='col-md-9 all-user'>

                </div>
            </div>
        </>
    );
};

export default Users;