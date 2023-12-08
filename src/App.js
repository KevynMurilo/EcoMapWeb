// Importações necessárias para o funcionamento da aplicação
import './App.css';
import React from 'react';
import RoutesPages from './RoutesPages'; // Componente de roteamento principal
import { AuthProvider } from './contexts/auth'; // Provedor de autenticação
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Componentes de roteamento

// Importações de todas as páginas da aplicação
import Prevencao from './pages/Prevencao';
import Reflorestamento from './pages/Reflorestamento';
import Educacao from './pages/Educacao';
import Comunidade from './pages/Comunidade';
import Download from './pages/Download';
import Donate from './pages/Donate';
import INPEMap from './pages/InpeMap';

function App() {
  return (
    <AuthProvider> {/* Provedor de autenticação envolve toda a aplicação */}
      <BrowserRouter> {/* Define o tipo de roteamento a ser utilizado */}
        <Routes> {/* Define as rotas disponíveis na aplicação */}
          {/* Configuração de cada rota com o respectivo componente associado */}
          <Route path='/' element={<RoutesPages />} /> {/* Rota principal */}
          <Route path='/Prevencao' element={<Prevencao />} /> {/* Rota para a página de Prevenção */}
          <Route path='/Reflorestamento' element={<Reflorestamento />} /> {/* Rota para a página de Reflorestamento */}
          <Route path='/Educacao' element={<Educacao />} /> {/* Rota para a página de Educação */}
          <Route path='/Comunidade' element={<Comunidade />} /> {/* Rota para a página de Comunidade */}
          <Route path='/Download' element={<Download />} /> {/* Rota para a página de Download */}
          <Route path='/Doacao' element={<Donate />} /> {/* Rota para a página de Doação */}
          <Route path='/InpeMap' element={<INPEMap />} /> {/* Rota para a página do INPEMap */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
