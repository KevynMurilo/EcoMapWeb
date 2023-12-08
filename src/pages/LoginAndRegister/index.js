import React, { useState, useContext, useRef } from "react";
import {
    Container,
    ContainerLogo,
    DivLogo,
    ContainerTitleAndDescription,
    TitleLogo,
    DescriptionTitle,
    ContainerLeft,
    TitleWelcome,
    Instruction,
    Form,
    Input,
    ContainerCheckAndForgot,
    CheckboxContainer,
    CheckboxInput,
    CheckboxLabel,
    ContainerForgotPassword,
    ForgotPasswordLink,
    ContainerButton,
    Button,
    ContainerRight,
    BackgroundRight,
    LogoRight,
    LogoIcon
} from "./styles";

import { AuthContext } from "../../contexts/auth";
import BackgroundImage from '../../assets/background2.jpg';
import RightLogo from '../../assets/LogoRight.png';

export default function LoginAndRegister() {
    const { signIN, signUp, isLoading, showSuccessMessage } = useContext(AuthContext);
    const [isRegistering, setIsRegistering] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleLoginClick = () => {
        if (!isRegistering) {
        if (emailRef.current.value && passwordRef.current.value) {
            signIN(emailRef.current.value, passwordRef.current.value);
        } else {
            console.log("Por favor, preencha todos os campos.");
        }
        } else {
        setIsRegistering(false);
        }
    };

    const handleRegisterClick = () => {
        if (isRegistering) {
        if (
            nameRef.current.value &&
            emailRef.current.value &&
            passwordRef.current.value &&
            confirmPasswordRef.current.value
        ) {
            signUp(
            nameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value,
            confirmPasswordRef.current.value
            );
            setIsRegistering(false);
        } else {
            console.log("Por favor, preencha todos os campos.");
        }
        } else {
        setIsRegistering(true);
        }
    };

    return (
        <Container>
        <ContainerLogo
            registering={isRegistering.toString()}
        >
            <DivLogo/>
            <ContainerTitleAndDescription registering={isRegistering.toString()}>
            <TitleLogo>EcoMap</TitleLogo>
            <DescriptionTitle>Monitoramento Ambiental</DescriptionTitle>
            </ContainerTitleAndDescription>
        </ContainerLogo>

        <ContainerLeft registering={isRegistering.toString()}>
            <TitleWelcome>{isRegistering ? "Create Account" : "Welcome Back"}</TitleWelcome>
            <Instruction>
            {isRegistering
                ? "To create your account you need to fill out these forms:"
                : "Thank you for getting back, please login to your account by filling these forms:"}
            </Instruction>

            <Form>
            {isRegistering && <Input type="name" placeholder="Name" ref={nameRef} />}
            <Input type="Email" placeholder="email" ref={emailRef} />
            <Input type="Password" placeholder="password" ref={passwordRef} />
            {isRegistering && (
                <Input
                type="password"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
                />
            )}
            </Form>

            <ContainerCheckAndForgot>
            <CheckboxContainer>
                <CheckboxInput type="checkbox" id="rememberMe" />
                <CheckboxLabel htmlFor="rememberMe">Remember me </CheckboxLabel>
            </CheckboxContainer>
            {!isRegistering && (
                <ContainerForgotPassword>
                <ForgotPasswordLink>Forgot password</ForgotPasswordLink>
                </ContainerForgotPassword>
            )}
            </ContainerCheckAndForgot>

            <ContainerButton>
            <Button
                onClick={handleLoginClick}
                style={{
                background: 'linear-gradient(#05404D, #245F49)',
                color: '#FFF',
                fontWeight: 'bold',
                }}
            >
                {isRegistering ? 'Login' : isLoading ? 'Carregando...' : 'LOGIN'}
            </Button>
            <Button
                onClick={handleRegisterClick}
                style={{ background: '#FFF', fontWeight: 'bold'}}
            >
                {isRegistering ? (isLoading ? 'Carregando...' : 'SIGN UP') : 'SIGN UP'}
            </Button>
            </ContainerButton>

            {showSuccessMessage && (
            <div style={{ color: 'green', marginBottom: '1rem', marginTop: 10 }}>
                Conta criada com sucesso! Agora faça login.
            </div>
            )}
        </ContainerLeft>

        <ContainerRight registering={isRegistering.toString()}
        >
            <BackgroundRight
            isregistering={isRegistering.toString()}
            src={BackgroundImage}
            />
            <LogoRight>
            <LogoIcon src={RightLogo} />
            </LogoRight>
        </ContainerRight>
        </Container>
);
}
