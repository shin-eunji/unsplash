import React, {useState} from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';
import {Link} from "react-router-dom";

function Login (props) {

    const {} = props;

    const [ value, setValue ] = useState([])

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <Container>
            <LoginHeader to={"/"} className="Login-header">
                <img src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" alt="unsplash" width={"60"}/>
                <p className={"login-title"}>Login</p>
                <p className={"login-text"}>Welcome Back.</p>
            </LoginHeader>
            <LoginBody className="login-body">
                <FacebookLogin
                    appId="1088597931155576"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    fontSize={"30"}
                    icon={"fa-facebook"}
                />
                <p>OR</p>
                <InputContainer>
                    <Input>
                        <p>Eamil</p>
                        <input type="text"
                               name="email"
                               className={"login-control"}
                               onChange={(e) => {
                                   setValue({
                                       ...value,
                                       email: e.target.value
                                   })
                               }}
                        />
                    </Input>
                    <Input>
                        <p>Password</p>
                        <input type="password"
                               name="password"
                               className={"login-control"}
                               onChange={(e) => {
                                   setValue({
                                       ...value,
                                       password: e.target.value
                                   })
                               }}
                        />
                        <a href="#" className={"forgot"}>Forgot your password?</a>
                    </Input>
                    <LoginButton>
                        <button onClick={() => {
                            console.log("value", value);
                        }}>Login</button>
                    </LoginButton>
                </InputContainer>
            </LoginBody>
            <LoginFooter>Don't have an account?
                <Link to={"/join"}>Join</Link>
            </LoginFooter>
        </Container>
    )
}

const Container = styled.div`
  height: 100vh;
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  width: 100%;
`
const LoginHeader = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  .login-title {
    font-weight:800;
    font-size: 30px;
    margin: 20px 0;
  }
  .login-text {
    font-size: 16px;
  } 
`;
const LoginBody = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  .kep-login-facebook {
    background: #1778f2;
    font-size: 16px;
    text-transform: inherit;
    border: 0;
    width: 100%;
    margin: 30px 0;
    &.metro {
      width: 100%;
      border-radius: 5px;
    }
  }
`;
const InputContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  border-radius: 5px;
`
const Input = styled.div`
  position:relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display:flex;
  flex-direction:column;
  p {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 16px;
  }
  input {
    width: 560px;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #666;
    margin-bottom: 20px;
    padding: 20px 10px;
    
  }
  .forgot {
    position: absolute;
    top: 0;
    right: 0;
    text-align:right;
    color: #666;
    text-decoration: underline;
  }
`;
const LoginButton = styled.div`
  background-color: #111;
  border-radius: 5px;
  text-align:center;
  button {
    width: 100%;
    height: 100%;
    padding: 12px 0;
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
`;
const LoginFooter = styled.div`
  text-align:center;
  margin-top: 30px;
  a {
    color: #666;
    text-decoration: underline;
  }
`;
export default Login;