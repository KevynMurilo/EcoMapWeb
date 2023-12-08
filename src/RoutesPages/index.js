import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";

import Home from "../pages/Home";
import LoginAndRegister from "../pages/LoginAndRegister";

export default function RoutesPages() {
    // Obtém a informação de autenticação do contexto
    const signed = true;

    // Verifica se o usuário está autenticado e exibe a página correspondente
    return (
        signed ? <Home /> : <LoginAndRegister />
    )
}
