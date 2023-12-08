// Importa a biblioteca axios para realizar requisições HTTP
import axios from "axios";

// Cria uma instância do Axios com uma URL base pré-configurada
const api = axios.create({
    baseURL: 'http://192.168.0.105:4000' // Define a URL base para as requisições
})

export default api; // Exporta a instância do Axios configurada
