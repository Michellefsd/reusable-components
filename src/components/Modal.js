import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {
    useEffect(()=> {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, [])
// // Para evitar que hayan errores y este componente pueda usarse en cualquier 
// // caso se agregara un hijo directo de html en el documento htmlque sea un 
return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between">
                    { children }
                    <div className="flex justify-end">
                        { actionBar }
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );  
}

export default Modal;