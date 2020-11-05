import React, {useState} from 'react';
import styled from 'styled-components';
import {navigate} from "../../../lib/History";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import {useForm} from 'react-hook-form';
import Facebook from "../../components/Auth/Facebook";
import Input from "../../components/Form/Input";

function SignIn(props) {

    const {} = props;

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container>
            <SContentContainer>

                <Header to={"/"} className="Login-header">
                    <Img onClick={() => navigate('/')}
                         src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"
                         alt="unsplash" width={"60"}/>
                    <Text>
                        <Title>Login</Title>
                        <Description>Welcome Back.</Description>
                    </Text>
                </Header>

                <Body>
                    <Facebook/>
                    <p>or</p>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input label="Email"
                               name="email"
                               type="email"
                               ref={register({required: true})}
                               error={errors.email}
                        />

                        <Input label="Password"
                               name="password"
                               type="password"
                               ref={register({required: true})}
                               error={errors.password}
                        />

                        <Forgot>Forgot your password?</Forgot>

                        <Button>Login</Button>
                    </Form>
                </Body>

                <Footer>Don't have an account?
                    <span onClick={() => navigate('/sign/join')}>Join</span>
                </Footer>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;   
    height: 100vh;
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width: ${pxToRem(560)};
    height: ${pxToRem(590)};
`;
const Header = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 100%;
`;
const Img = styled.img`
    
`;
const Text = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
`;
const Title = styled.div`
    font-weight:700;
    font-size: ${pxToRem(30)};
    margin: ${pxToRem(20)} 0;
`;
const Description = styled.div`
    font-size: ${pxToRem(16)};
    font-weight: 400;
`;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: ${pxToRem(520)};
    p {
        color: #111;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
    }
`;
const Form = styled.form`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width: 100%;
    margin-top: ${pxToRem(32)};
    color: #111;
`;
const Forgot = styled.div`
    position: absolute;
    top: ${pxToRem(86)};
    right: 0;
    color: #666;
    font-size: ${pxToRem(15)};
    font-weight: 400;
    line-height: 1.6;
    text-decoration: underline;
`;

const Button = styled.button`
    width: 100%;
    height: ${pxToRem(50)};
    padding: ${pxToRem(12)} 0;
    background-color: #111;
    border-radius: ${pxToRem(5)};
    font-size: ${pxToRem(16)};
    font-weight: 500;
    text-align:center;
    border: none;
    color: #fff;
`;

const Footer = styled.div`
    display:flex;
    align-items:center;
    text-align:center;
    margin-top:${pxToRem(32)};
    span {
        color: #666;
        text-decoration: underline;
        cursor: pointer;
        margin-left: ${pxToRem(6)};
    }
`;
export default SignIn;