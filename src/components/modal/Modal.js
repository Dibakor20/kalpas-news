import React from 'react';

const Modal = ({ user, setIsRead }) => {
    const { userId, id, title, body } = user;
    return (
        <>
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{title}</h5>
                    </div>
                    <div class="modal-body">
                        <p> {body}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" onClick={() => setIsRead(false)} class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Modal;