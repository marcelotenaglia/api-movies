function Modal({ onClose, selectedMovie }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
}

export default Modal;
