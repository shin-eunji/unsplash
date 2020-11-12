import React from 'react';
import styled from 'styled-components';
import FacebookLogin from "react-facebook-login";

import {navigate} from "../../../lib/History";
import {pxToRem} from "../../../common/Text/Text.Styled";
import Facebook from "../../components/Auth/Facebook";
import {useForm} from "react-hook-form";
import Input from "../../containers/Home/Form/Input";
import {authActions} from "../../../redux/actionCreators";
import Validation, {ValidationTypes} from "../../../lib/Validate";

function SignUp(props) {

    const {} = props;

    const responseFacebook = (response) => {
        console.log(response);
    }

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        authActions.signUp(data);
        console.log("errors", errors);
    }

    return (
        <Container>
            <Visual>
                <Logo onClick={() => navigate('/')}>
                    <img
                        src="https://unsplash.com/assets/core/logo-white-8962708214629a3e8f9fbf5b87b70c3ace41c4175cbcc267f7fbb8449ac45bdd.svg"
                        alt="unsplash"/>
                </Logo>

                <Text>
                    <Title>Creation starts here</Title>
                    <Description>Access 2,096,199 free, high-resolution photos you can't find anywhere
                        else</Description>
                </Text>

                <Thumbnail>Uploaded about 7 years ago by Barcelona</Thumbnail>
            </Visual>


            <SContentContainer>
                <Header>
                    <JoinTitle>Join Unsplash</JoinTitle>
                    <JoinDescription>Already have an account? <span onClick={() => navigate('/sign/login')}>Login</span></JoinDescription>
                </Header>

                <Body className="login-body">
                    <Facebook/>
                    <p>OR</p>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input label="First name"
                               type="text"
                               name="firstname"
                               placeholder="First Name"
                               register={register({
                                   required: true
                               })}
                               error={errors.name}
                        />

                        <Input label="Last name"
                               type="text"
                               name="lastname"
                               placeholder="Last Name"
                               register={register({
                                   required: true
                               })}
                               error={errors.name}
                        />

                        <Input label="Email address"
                               type="email"
                               name="email"
                               placeholder=""
                               register={register({
                                   required: true,
                                   validate: {
                                       [ValidationTypes.IS_EMAIL]: value => Validation.isEmail(value)
                                   },
                               })}
                               error={errors.email}
                        />

                        <Input label="Username"
                               type="username"
                               name="username"
                               placeholder=""
                               register={register({
                                   required: true,
                                   maxLength: 15,
                                   validate: {
                                       [ValidationTypes.IS_VALID_NICKNAME]: value => Validation.isValidNickname(value),
                                   },
                               })}
                               error={errors.nickname}
                        />

                        <Input label="Password"
                               type="password"
                               name="password"
                               placeholder=""
                               register={register({
                                   required: true,
                                   minLength: 8,
                                   maxLength: 16,
                                   validate: {
                                       [ValidationTypes.IS_VALID_PASSWORD]: value => Validation.isValidPassword(value),
                                   },
                               })}
                               error={errors.password}
                        />
                        <Button>Join</Button>
                    </Form>
                </Body>

                <Footer>By joining, you agree to the
                    <span onClcik={() => navigate('/terms')}>Terms</span> and
                    <span onClcik={() => navigate('/policy')}>Privacy Policy</span>.
                </Footer>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-direction:row;
  height: 100vh;
`
const Visual = styled.div`
    position:relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content: space-between;
    flex: 2;
    color: #fff;
    padding: ${pxToRem(50)};
    background: url("https://source.unsplash.com/category/nature") 50% 70% / cover no-repeat;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
        z-index: 1;
    }
`;
const Logo = styled.div`
    z-index: 2;
`;
const Text = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    flex: 1;
    z-index: 2;
`;
const Title = styled.div`
    font-size: ${pxToRem(48)};
    font-weight:700;
    margin-bottom: ${pxToRem(16)};
`;
const Description = styled.div`
    font-size: ${pxToRem(24)};
    font-weight: 400;
    line-height: 1.35;
`;
const Thumbnail = styled.div`
    font-size: ${pxToRem(15)};
    font-weight: 400;
    line-height: 1.6;
    margin: ${pxToRem(16)} 0;
`;

const SContentContainer = styled.div`
    flex: 3;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: flex-start;
    padding: ${pxToRem(80)} 8% ${pxToRem(20)};
    overflow-x: hidden;
    overflow-y: scroll;
`;
const Header = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`;
const JoinTitle = styled.div`
    color: #111;
    font-size: ${pxToRem(46)};
    font-weight: 700;
`;
const JoinDescription = styled.div`
    font-size: ${pxToRem(15)};
    font-weight: 400;
    line-height: 1.6;
    margin: ${pxToRem(16)} 0;
    span {
        color: #767676;
        text-decoration: underline;
    }
`;
const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 100%;
    p {
        color: #111;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
    }
`;
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content: space-between;
    width: 100%;
`;
const Button = styled.button`
    display: flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: ${pxToRem(42)};
    background: #111;
    border-radius: ${pxToRem(3)};
    color: #fff;
    font-size: ${pxToRem(15)};
    font-weight: 500;
    line-height: 1.6;
    border: none;
    box-shadow: none;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;
const Footer = styled.div`
    margin: ${pxToRem(22)} 0;
    color: #767676;
    font-size: ${pxToRem(13)};
    line-height: 1.8;
    span {
        cursor: pointer;
        margin: 0 ${pxToRem(4)};
        text-decoration: underline;
    }
`;
export default SignUp;
