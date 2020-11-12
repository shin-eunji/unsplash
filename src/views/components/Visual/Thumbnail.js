import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../common/Text/Text.Styled";

function Thumbnail (props) {

    const {} = props;

    return (
        <Container>
            <UserPhoto>
                <Link>Photo of the Day</Link>
                <Text>&nbsp;by&nbsp;</Text>
                <Link>Paweł Czerwiński</Link>
            </UserPhoto>
            <License>
                <Text>Read more about the&nbsp;</Text>
                <Link>Unsplash License</Link>
            </License>
            <WebSite>
                <WebsiteText>
                    <img src="https://images.unsplash.com/file-1593474834382-661b072d9ec8image" alt="SQUARESPACE logo"/>
                    <Link>Create your website today.</Link>
                </WebsiteText>
            </WebSite>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    bottom: 0;
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    padding: ${pxToRem(10)} ${pxToRem(20)};
    z-index: 10;
`
const UserPhoto = styled.div`
    display:flex;
    align-items:center;
`;
const License = styled.div`
    display:flex;
    align-items:center;
`;
const WebSite = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    img {
        width: ${pxToRem(140)};
        margin-bottom: ${pxToRem(4)};
    }
`;
const WebsiteText = styled.a`
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    &:hover {
        color: #fff;  
    }
    
`;
const Text = styled.div`
    font-size: ${pxToRem(13)};
    color: #fff;
    opacity: .7;
    color: hsla(0,0%,100%,.55);
    text-shadow: 0 1px 8px rgba(0,0,0,.1);

`;
const Link = styled.div`
    font-size: ${pxToRem(13)};
    color: hsla(0,0%,100%,.8);
    cursor: pointer;
    &:hover {
        color: #fff;  
    }
`;
export default Thumbnail;
