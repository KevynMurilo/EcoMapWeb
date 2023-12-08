import React from "react";
import { 
    Container,
} from "./styles";

// Importações dos componentes utilizados na página
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import About from "../../components/About";
import Problems from "../../components/Problems";
import Soluction from "../../components/Soluction";
import Frase from "../../components/Frase";
import Licoes from "../../components/Licoes";
import FraseEnd from "../../components/FraseEnd";
import Footer from "../../components/Footer";
import Statistics from "../../components/Statistics";

// Componente principal da página Home
export default function Home(){
    return(
        // Estrutura principal da página, organizada em seções e componentes
        <Container>
            <NavBar shouldAnimate={true} /> {/* Barra de navegação, com animação ativa */}
            <Header/> {/* Cabeçalho da página */}
            <About/> {/* Seção sobre o aplicativo */}
            <Statistics/> {/* Seção de estatísticas */}
            <Problems/> {/* Seção de problemas relacionados */}
            <Soluction/> {/* Seção de soluções */}
            <Frase/> {/* Seção com uma frase inspiradora ou destacada */}
            <Licoes/> {/* Seção com lições aprendidas ou aspectos importantes */}
            <FraseEnd/> {/* Seção com outra frase, possivelmente de encerramento */}
            <Footer/> {/* Rodapé da página */}
        </Container>
    )
}
