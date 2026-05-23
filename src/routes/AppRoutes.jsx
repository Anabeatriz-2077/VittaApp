import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Professional from "../pages/Professional/Professional";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProfileManager from "../pages/ProfileManager/ProfileManager";
import Messages from "../pages/Messages/Messages";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* Página principal */}
      <Route path="/" element={<Home />} />

      {/* Página profissional */}
      <Route path="/professional/:id" element={<Professional />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Cadastro */}
      <Route path="/register" element={<Register />} />

      {/* Perfil profissional */}
      <Route path="/profile-manager" element={<ProfileManager />} />

      {/* Mensagens */}
      <Route path="/messages" element={<Messages />} />

      {/* Página não encontrada */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;