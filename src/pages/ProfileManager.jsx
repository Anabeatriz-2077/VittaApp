function ProfileManager() {

  return (

    <div>

      <h1>Gerenciar Perfil</h1>

      <form>

        <input
          type="text"
          placeholder="Especialidade"
        />

        <input
          type="text"
          placeholder="Cidade"
        />

        <textarea
          placeholder="Descrição profissional"
        />

        <button>
          Salvar
        </button>

      </form>

    </div>

  );
}

export default ProfileManager;