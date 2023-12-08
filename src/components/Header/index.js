import React from "react";
import {
  Container,
  ContainerText,
  Title,
  SubTitle,
  ImageBackground,
  StyledSlider
} from "./styles"; // Certifique-se de ajustar os caminhos de importação para os estilos e imagens corretos
import Image1 from "../../assets/BackgroundHeader.jpg"; // Ajuste o caminho correto para a imagem
import Image2 from "../../assets/BackgroundHeader2.jpg"; // Ajuste o caminho correto para a imagem

// Array de imagens a serem exibidas no slider
const images = [Image1, Image2];

export default function Header() {
  // Configurações do slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Container>
      {/* Componente Slider */}
      <StyledSlider {...settings}>
        {/* Mapeamento das imagens para o slider */}
        {images.map((image, index) => (
          <div key={index}>
            {/* Imagem de fundo */}
            <ImageBackground src={image} alt={`image${index + 1}`} />
          </div>
        ))}
      </StyledSlider>
      {/* Conteúdo de texto */}
      <ContainerText>
        {/* Título */}
        <Title>
          EcoMap: Protegendo a Natureza, Combatendo as Queimadas.
        </Title>
        {/* Subtítulo */}
        <SubTitle>
          Obtenha informações ambientais em tempo real para tomar decisões mais
          conscientes e promover um futuro sustentável.
        </SubTitle>
      </ContainerText>
    </Container>
  );
}
