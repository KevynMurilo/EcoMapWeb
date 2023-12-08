import React, {createContext, useState,} from "react";

import api from '../services/api'

// Criação de um contexto de autenticação para compartilhamento de dados entre componentes
export const AuthContext = createContext({});

// Componente responsável por prover o contexto de autenticação para toda a aplicação
export function AuthProvider({ children }){
    // Estado para armazenar informações do usuário e controle de carregamento
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    // Função assíncrona para realizar o login do usuário
    async function signIN(email, password){
        try {
            setIsLoading(true);
            const response = await api.post('/auth/login', {
                email: email,
                password: password,
            });
    
            // Tratamento dos dados obtidos na resposta da API
            const { id, name, token } = response.data;
    
            const data = {
                id,
                name,
                email,
                token,
            };
            
            // Armazenamento dos dados do usuário no localStorage e configuração do token nas requisições futuras
            localStorage.setItem('userData', JSON.stringify(data));

            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            setUser({
                id,
                name,
                email,
            });

            // Exibe mensagem de sucesso
            setShowSuccessMessage(true);

        } catch (err) {
            console.log("ERRO AO LOGAR", err);
        } finally {
            setIsLoading(false);
        }
    }
    
    // Função assíncrona para realizar o cadastro de um novo usuário
    async function signUp(name, email, password, confirmPassword){
        try{
            setIsLoading(true); 
            const response = await api.post('/auth/register',{
                name: name,
                email: email,
                password: password,
                confirmpassword: confirmPassword
            })
            console.log(response);

            if (response.status === 201) {
                // Exibe mensagem de sucesso ao cadastrar
                setShowSuccessMessage(true);
            }

            
        }catch(err){
            console.log("ERRO AO CADASTRAR", err);
        }
        finally {
            setIsLoading(false); 
        }
    }

    // Prover o contexto de autenticação para os componentes filhos
    return(
        <AuthContext.Provider value={{ signed: !!user, signIN, signUp, isLoading, showSuccessMessage , user}}>
            {children}
        </AuthContext.Provider>
    )
}