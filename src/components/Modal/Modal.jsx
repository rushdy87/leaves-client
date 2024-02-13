import { createPortal } from 'react-dom';
import './Modal.scss';

const Overlays = ({ children, closeOverlay }) =>
  createPortal(
    <div className='modal'>
      <div className='modal-content'>
        <button className='close-btn' onClick={closeOverlay}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('overlays')
  );

const Modal = ({ children, closeOverlay }) => {
  return <Overlays closeOverlay={closeOverlay}>{children}</Overlays>;
};
export default Modal;
