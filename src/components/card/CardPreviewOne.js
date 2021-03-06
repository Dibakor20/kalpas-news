import React,{ useState } from 'react';
import './CardPreview.css';
import Modal from '../modal/Modal';
import imageone from '../../assets/images/img.jpg';

const CardPreviewOne = ({ user, toggleState,handleDelete}) => {
    const {  id, title, body } = user;
    const [isRead, setIsRead] = useState(false);
    return (
        <>
            <div class="card card_one" >
                <div class="card-body px-4">
                    <div className="delete-button text-right pointer" onClick={ ()=> handleDelete(id)}>
                <i class="fas fa-times"></i>
            </div>
                    <h5 class="card-title">{ title.slice(0,20)}</h5>
                    <p class="card-text">{body.slice(0, 34)}
                    <p className='description' onClick={()=>setIsRead(true)} data-toggle="modal" data-target="#exampleModalLong" >Read</p>

                        {

                            isRead ?
                            
                            <Modal user={user} setIsRead={setIsRead}></Modal>

                            
                            : ''
                        }
                    </p>
                </div>
                <img src={imageone} class="card-img-top" alt="..." className='image px-4' />
               
           </div>
        </>
    );
};

export default CardPreviewOne;