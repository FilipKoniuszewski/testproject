import React from 'react';
import Button from "./Button";
import "../Styles/RegisterModal.scss"
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IconContext } from "react-icons";


export default function RegisterModal({modalRef,clickEvent}) {
    
    return (
        <div ref={modalRef} className="register-modal">
            <div className="register-modal__content">
                <IconContext.Provider value={{ color: "hsl(356, 100%, 66%)", size: "1.5em"}}>
                    <AiOutlineInfoCircle />
                </IconContext.Provider>
                <h3 className="register-modal__header">
                    Account not created
                </h3>
                <p className="register-modal__info">
                    Looks like you already have an account with easyJet.
                    If this is you please login to access your account,
                    or otherwise please choose an alternative email address.
                </p>
            </div>
            
            <Button
                clickEvent={clickEvent}
                content="Close"
                className="close-modal-button"/>
                
        </div>
    );
}
