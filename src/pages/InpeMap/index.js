import React from 'react';
import { Container, Lista, Items } from './styles';
import { useNavigate } from 'react-router-dom';

const INPEMap = () => {
    const navigate = useNavigate();

    // Funções para lidar com a navegação ao clicar nos links
    const handleClickHome = () => {
        navigate('/');
    };

    const handleClickDownload = () => {
        navigate('/Download');
    };

    const handleClickDoacao = () => {
        navigate('/Doacao');
    };

    // Este link ativa a própria página, considerando que já estamos nela
    const handleClickQueimadas = () => {
        navigate('/InpeMap');
    };

    return (
        <>
            {/* Componente Container para o layout */}
            <Container>
                {/* Lista de links */}
                <Lista>
                    <Items onClick={handleClickHome}>Início</Items>
                    <Items onClick={handleClickDownload}>Download</Items>
                    <Items onClick={handleClickDoacao}>Doação</Items>
                    <Items onClick={handleClickQueimadas}>Queimadas</Items>
                </Lista>
            </Container>
            {/* Componente de Iframe para o mapa do INPE */}
            <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
                <iframe
                    title="Mapa de Queimadas INPE"
                    width="100%"
                    height="100%"
                    src="http://terrabrasilis.dpi.inpe.br/queimadas/bdqueimadas/#"
                    frameBorder="0" 
                    allowFullScreen 
                ></iframe>
            </div>
        </>
    );
};

export default INPEMap;
