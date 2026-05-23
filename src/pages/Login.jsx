import { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";

function Login() {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(e){

    e.preventDefault();

    login(email, password);
  }

  return (

    <div>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Digite seu email"

          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Digite sua senha"

          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button>
          Entrar
        </button>

      </form>

    </div>

  );
}

export default Login;