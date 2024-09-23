//import React from 'react';

const Modal = ({ children, modal, setModal, hidden }) => {
    return <>
        <div
            onClick={() => setModal(false)}
            className={`bg-black/80 fixed inset-0 z-10 
            ${hidden} transition-all duration-500`} />
        {children}
    </>;
}

export default Modal