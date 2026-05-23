import { useState } from "react";

import "./MessageBox.css";

function MessageBox() {

  const [message, setMessage] = useState("");

  function handleSend(e){

    e.preventDefault();

    alert("Mensagem enviada!");

    setMessage("");
  }

  return (

    <form
      className="message-box"

      onSubmit={handleSend}
    >

      <textarea

        placeholder="Digite sua mensagem"

        value={message}

        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button>
        Enviar
      </button>

    </form>

  );
}

export default MessageBox;