import styled from 'styled-components';

// Estilização do container que envolve a lista de itens de navegação
export const Container = styled.div`
    position: absolute;
    left: 25%; // Posicionamento à esquerda
    top: 1%; // Posicionamento no topo
`;

// Estilização da lista de itens de navegação
export const Lista = styled.ul`
    list-style-type: none; // Remove a estilização padrão dos itens de lista
    margin: 0; // Remove margem padrão
    padding-right: 20%; // Espaçamento à direita
    display: flex; // Layout flexível para os itens

    @media (max-width: 768px) {
        margin-right: 15%; // Ajuste de margem para telas menores
    }
`;

// Estilização dos itens da lista de navegação
export const Items = styled.li`
    display: inline-block; // Exibição em linha
    margin-left: 4rem; // Margem à esquerda para os itens
    font-size: 1.2vw; // Tamanho da fonte responsivo
    font-weight: bold; // Peso da fonte
    color: #000; // Cor do texto
    cursor: pointer; // Cursor ao passar o mouse
    transition: transform 0.3s ease-in-out; // Transição ao passar o mouse

    &:hover {
        transform: scale(1.2); // Efeito de escala ao passar o mouse
    }

    @media (max-width: 768px) {
        font-size: 3vw; // Tamanho da fonte para telas menores
        margin-right: 15%; // Ajuste de margem para telas menores
        margin-left: 0; // Remove a margem à esquerda para telas menores
    }
`;
