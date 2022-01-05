import React from 'react';
import { useState } from 'react/cjs/react.development';

const CardPreviewTwo = ({ user, toggleState }) => {
    const { userId, id, title, body } = user;
    const [isRead, setIsRead] = useState(false);
    return (
        <>
            <div className='card card_two p-3'>
            <div className="text-right delete-button" >
                <i class="fas fa-times"></i>
            </div>
                <div className='d-flex'>
                    <img src="https://inno-scis-client.web.app/static/media/male.55a0b867.png" alt=""  className='image-two'/>
                    <div>
                        <h5>{title}</h5>
                        <span>{ body.slice(0,100)}...Read More</span>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default CardPreviewTwo;