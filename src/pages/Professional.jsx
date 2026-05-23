import { useParams } from "react-router-dom";

import { useState } from "react";

import Modal from "../../components/Modal/Modal";

function Professional() {

  /*
  Captura ID da rota
  */
  const { id } = useParams();

  /*
  Estado do modal
  */
  const [open, setOpen] = useState(false);

  return (
    <div>

      <button onClick={() => history.back()}>
        ← Voltar
      </button>

      <h1>Perfil Profissional</h1>

      <button onClick={() => setOpen(true)}>
        Agendar Sessão
      </button>

      <Modal
        isOpen={open}
        closeModal={() => setOpen(false)}
      />

    </div>
  );
}

export default Professional;