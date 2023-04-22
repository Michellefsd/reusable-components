
import Button from "../components/Button";
import Modal from '../components/Modal';
import useModal from "../hooks/use-modal";


function ModalPage() {
    const { handleClick, handleClose, showModal } = useModal();
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