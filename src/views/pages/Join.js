import React from 'react';
import styled from 'styled-components';
import FacebookLogin from "react-facebook-login";

import {Link} from "react-router-dom";

function Join (props) {

    const {} = props;

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <Container>
            <JoinLeft>
                <ImgBox>
                    <Logo>
                        <img src="https://unsplash.com/assets/core/logo-white-8962708214629a3e8f9fbf5b87b70c3ace41c4175cbcc267f7fbb8449ac45bdd.svg" alt="unsplash"/>
                    </Logo>
                    <Text>
                        <h3>Creation starts here</h3>
                        <p>Access 2,096,199 free, high-resolution photos you can't find anywhere else</p>
                    </Text>
                    <Footer>
                        <span>Uploaded about 7 years ago by Barcelona</span>
                    </Footer>
                </ImgBox>
            </JoinLeft>
            <JoinRight>
                <JoinHeader className="Login-header">
                    <h2>Join Unsplash</h2>
                    <p>Already have an account? <Link to={"/login"}>Login</Link></p>
                </JoinHeader>
                <JoinBody className="login-body">
                    <FacebookLogin
                        appId="1088597931155576"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        fontSize={"30"}
                        icon={"fa-facebook"}
                    />
                    <p>OR</p>
                </JoinBody>
                <Form action="join-form">
                    <User>
                        <Input className={"user"}>
                            <label htmlFor="">First name</label>
                            <input placeholder={"First Name"} />
                        </Input>
                        <Input className={"user"}>
                            <label htmlFor="">Last name</label>
                            <input placeholder={"Last Name"} />
                        </Input>
                    </User>
                    <Input>
                        <label htmlFor="">Email address</label>
                        <input placeholder={""} />
                    </Input>
                    <Input>
                        <label htmlFor="">Username
                            <span>(only letters, numbers, and underscores)</span>
                        </label>
                        <input placeholder={""} />
                    </Input>
                    <Input>
                        <label htmlFor="">Password
                            <span>(min. 6 char)</span>
                        </label>
                        <input placeholder={""} />
                    </Input>
                    <Button>
                        Join
                    </Button>
                </Form>
                <JoinFooter>By joining, you agree to the
                    <Link>Terms</Link> and
                    <Link>Privacy Policy</Link>.
                </JoinFooter>
            </JoinRight>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  flex-direction:row;
  height: 100vh;
`
const JoinLeft = styled.div`
  position:relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  flex: 2;
  background: url("https://images.unsplash.com/photo-1598432521392-0ce5ff611c85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=562&q=80") 50% 50% / cover no-repeat;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.15);
    z-index: 10;
  }
`;
const ImgBox = styled.div`
  height: 100vh;
  position:relative;
  top: 0;
  left: 0;
  bottom: 0;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  padding: 80px;
  color: #fff;
`;
const Logo = styled.div`
  z-index: 100;
`;
const Text = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  flex: 1;
  z-index: 101;
  h3 {
    font-size: 50px;
    font-weight:900;
  }
  p {
    font-size: 24px;
    font-weight: 600;
  }
`;
const JoinRight = styled.div`
  flex: 3;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
`;
const Button = styled.div`

`;
const JoinFooter = styled.div`
    
`;
const Footer = styled.div`
  font-size: 16px;
  font-weight: 800;
`;

const JoinHeader = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom: 50px;
    h2 {
      color: #111;
      font-size: 50px;
      font-weight: 900;
    }
`;
const JoinBody = styled.div`
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
const Form = styled.div`
  width: 800px;
`;
const User = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  .user {
  width: 49%;
  }
`;
const Input = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  margin: 10px 0;

  label {
    margin-bottom: 10px;
  }
  input {
    padding: 10px;
    -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;
    border: 1px solid #111;
  }
`;

export default Join;
