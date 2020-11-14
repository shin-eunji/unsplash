import styled from 'styled-components'
import {generateMedia} from "styled-media-query";
import {pxToRem} from "../Text/Text.Styled";

export const customMedia = generateMedia({
    desktop: "1170px",
    tablet: "830px",
    mobile: "500px"
});

export const ContentContainer = styled.div`
    position:relative;
    width: 1320px;
    padding: 0 20px;
    margin: 0 auto;
    
    ${customMedia.lessThan('desktop')`
        max-width: 830px;
    `}
    ${customMedia.lessThan('tablet')`
        max-width: 830px;
        width: 100%;    
    `}
    ${customMedia.lessThan('mobile')`
        max-width: 530px;
        width: 100%;    
    `}
`;