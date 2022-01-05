import React,{ useState } from 'react';
import Modal from '../modal/Modal';
import imageTwo from '../../assets/images/user.png';

const CardPreviewTwo = ({ user, toggleState,handleDelete }) => {
    const { userId, id, title, body } = user;
    const [isRead, setIsRead] = useState(false);
    return (
        <>
            <div className='card card_two p-3'>
            <div className="text-right delete-button pointer"  onClick={ ()=> handleDelete(id)}>
                <i class="fas fa-times"></i>
            </div>
                <div className='d-flex'>
                    <img src={imageTwo} alt=""  className='image-two'/>
                    <div>
                        <h5>{title}</h5>
                        <span>{ body.slice(0,100)}  <p className='description' onClick={()=>setIsRead(true)} data-toggle="modal" data-target="#exampleModalLong" >Read</p>
                        {
                            isRead ?
                            <Modal user={user} setIsRead={setIsRead}></Modal>   
                            : ''
                        }</span>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default CardPreviewTwo;