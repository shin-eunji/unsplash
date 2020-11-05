import React from 'react';
import styled from 'styled-components';
import FacebookLogin from "react-facebook-login";
import {pxToRem} from "../../../common/Text/Text.Styled";


function Facebook (props) {

    const {} = props;

    const responseFacebook = (data) => {
        console.log("data", data);
    }

    return (
        <Container>
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={false}
                fields="name,email,picture"
                className={"facebook"}
                callback={responseFacebook}
                fontSize={"30"}
                icon={"fa-facebook"}
            />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    span {
        display:flex;
        align-items:center;
        justify-content:center;
        height: ${pxToRem(44)};
        border-radius: ${pxToRem(3)};
        background: #1778f2;
        color: #fff;
        margin: ${pxToRem(36)} 0;
        button {
            background: none;
            border: none;
            text-transform: inherit;
            font-size: ${pxToRem(16)};
            font-weight: 500;
            padding: 0;
        }
    }
`
export default Facebook;