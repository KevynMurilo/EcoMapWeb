# EcoMap - README

## Descrição
O EcoMap é um site desenvolvido para promover a conscientização ambiental, fornecendo informações em tempo real sobre queimadas, estatísticas de áreas afetadas e soluções para preservação do meio ambiente. Além disso, oferece funcionalidades de login e registro para os usuários.

## Configuração da Conexão com a API
Para que o site possa se conectar à API e obter dados em tempo real sobre queimadas, além de acessar funcionalidades de login e registro, é necessário ajustar o endereço IP na pasta `services`. Localize o arquivo `api.js` ou `axiosConfig.js`, onde há a configuração da URL base da API.

```javascript
// Importa a biblioteca axios para realizar requisições HTTP
import axios from "axios";

// Cria uma instância do Axios com uma URL base pré-configurada
const api = axios.create({
    baseURL: 'http://SEU_ENDERECO_IP:4000' // Altere para o seu endereço IP e a porta da API
})

export default api; // Exporta a instância do Axios configurada
Certifique-se de substituir 'http://SEU_ENDERECO_IP:4000' pelo endereço IP correto da sua API.
```

## Funcionalidades Principais
Visualização de estatísticas e gráficos sobre queimadas em diferentes biomas.

Informações detalhadas sobre focos de queimadas em regiões específicas.

Recursos educacionais e conscientização sobre a preservação ambiental.

Funcionalidades de login e registro para os usuários.

Possibilidade de doações para comunidades afetadas por queimadas.

Apoio a projetos de reflorestamento e sustentabilidade.

Funcionalidades de Login e Registro

A API está configurada para oferecer funcionalidades de login e registro de usuários. As rotas relacionadas estão disponíveis para autenticação e registro de novos usuários. Consulte a documentação da API para mais detalhes sobre como utilizar essas funcionalidades.

Execução do Projeto

Clone o repositório.

Navegue até a pasta do projeto.

Execute npm install para instalar as dependências.

Ajuste o endereço IP na pasta services/api.js para conectar-se à sua API.

Execute npm start para iniciar o servidor local.
