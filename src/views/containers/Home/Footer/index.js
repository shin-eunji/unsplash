import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {AiOutlineTwitter, FaInstagram, SiFacebook} from "react-icons/all";

import {navigate} from "../../../../lib/History";
import {ContentContainer} from "../../../../common/Layout/Components.Styled";
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {sitemap} from "./Sitemap";

import Site from "./Site";

function Footer (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <h1>Unsplash</h1>
                <Service>
                    <SiteMap>
                        {
                            sitemap.map((item) => <Site {...item} />)
                        }
                    </SiteMap>
                    <Connect>
                        <AiOutlineTwitter/>
                        <SiFacebook/>
                        <FaInstagram/>
                    </Connect>
                </Service>
                <Info>
                    <Logo>
                        <LogoImage/>
                        <p>Make something awesome, shin.</p>
                    </Logo>
                    <FooterLink>
                        <LinkItem onClick={() => navigate('/privacy')}>Privacy</LinkItem>
                        <LinkItem onClick={() => navigate('/terms')}>Terms</LinkItem>
                        <LinkItem onClick={() => navigate('/policy')}>Policy & Safety</LinkItem>
                    </FooterLink>


                </Info>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    top: ${pxToRem(122)};
    width: 100%;
    padding: ${pxToRem(96)} ${pxToRem(15)} ${pxToRem(40)};
`
const SContentContainer = styled(ContentContainer)`
    h1 {
        font-size: ${pxToRem(28)};
        font-weight: 700;
        margin-bottom: ${pxToRem(32)};
    }
`;
const Service = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content: space-between;
`;
const SiteMap = styled.div`
    display:flex;
    flex-direction:column;
    flex-flow: wrap;
    align-items:flex-start;
    justify-content:flex-start;
    width: ${pxToRem(600)};
    height: ${pxToRem(160)};
`;
const Connect = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    & > * {
        color: #767676;
        margin: 10px;
        width: ${pxToRem(20)};
        height: ${pxToRem(20)};
    }
`;
const Info = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #d1d1d1;
`;
const Logo = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    p {
        color: #767676;
        margin-left: ${pxToRem(10)};
    }
`;
const LogoImage = styled.img`
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
    background: url('https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg') no-repeat 100% 100% / 100%;
    border: none;
`;
const FooterLink = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    padding: ${pxToRem(24)} 0;
`;
const LinkItem = styled.div`
    color: #767676;
    padding-left: ${pxToRem(24)};
    cursor: pointer;
`;
export default withRouter(Footer);