import React, {useState} from "react";

import { 
    Container,
    ContainerLeft,
    ContainerRight,
    Title,
    SubTitle,
    Image,
    SubContainerRight,

    ContainerInputs,    
    NameAndEmail,
    Amount,
    Company,
    ButtonSend,

    DonationContainer,
    TitleDonation,
    DonationOption,
    DonationValue


} from "./styles";

import BackgroundDonate from '../../assets/imagedonate.jpg';

import NavBar from "../../components/NavBar";

export default function Donate(){
    const [selectedValue, setSelectedValue] = useState(0);

    const handleSelectValue = (value) => {
        setSelectedValue(value);
    };
    
    return(
        <Container>
            <NavBar shouldAnimate={false}/>
            <ContainerLeft>
                <Image src={BackgroundDonate} alt="Background"/>
            </ContainerLeft>

            <ContainerRight>
                <SubContainerRight>
                    <Title>Faça uma doação</Title>
                    <SubTitle>Contribua para restaurar a natureza e promover a biodiversidade com cada gesto. Juntos, estamos cultivando um mundo mais verde e sustentável.</SubTitle>

                    <ContainerInputs>
                        <NameAndEmail type="Name" placeholder="Nome"/>
                    <NameAndEmail type="email" placeholder="Email"/>
                    </ContainerInputs>

                    <TitleDonation>Escolha o valor da doação</TitleDonation>
                    <DonationContainer>
                        {[5, 10, 20, 50, 100, 150, 200, 250, 300].map((value) => (
                            <DonationOption
                            key={value}
                            selected={selectedValue === value}
                            onClick={() => handleSelectValue(value)}
                            >
                            <DonationValue selected={selectedValue === value}>${value}</DonationValue>
                            </DonationOption>
                        ))}
                    </DonationContainer>

                    <Company type="Name" placeholder="Escreva o nome da companhia"/>
                    <ButtonSend>
                        Enviar doação
                    </ButtonSend>
                    
                </SubContainerRight>
            </ContainerRight>
        </Container>
    )
}