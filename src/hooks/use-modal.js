import { useState } from 'react';

function useModal() {
    const [showModal, setShowModal] = useState(false);
    
    const handleClick = () => {
        setShowModal(!showModal);
    }
    const handleClose = () => {
        setShowModal(!showModal)
    }
    return {
        handleClick,
        handleClose,
        showModal
    }
};

export default useModal;