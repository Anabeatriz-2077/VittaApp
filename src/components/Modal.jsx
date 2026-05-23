import "./Modal.css";

function Modal({ isOpen, closeModal }) {

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Agendar Aula</h2>

        <form>

          <input type="date" />

          <input type="time" />

          <button>
            Confirmar
          </button>

        </form>

        <button onClick={closeModal}>
          Fechar
        </button>

      </div>
    </div>
  );
}

export default Modal;