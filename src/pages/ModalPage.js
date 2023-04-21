import { useState } from 'react';
import Button from "../components/Button";
import Modal from '../components/Modal';


function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    
    const handleClick = () => {
        setShowModal(!showModal);
    }
    const handleClose = () => {
        setShowModal(!showModal)
    }
    const actionBar = <div>
        <Button onClick={handleClose} primary> I Accept </Button>
    </div>

    const modal = <Modal 
        onClose={handleClose}
        actionBar={actionBar}
    >
        <p>Here it is!!!</p>
    </Modal>
    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            <p>lipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsumlipsum</p>
            { showModal && modal } 
        </div>
    )
};

export default ModalPage;