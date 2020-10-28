import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";

function Title (props) {

    const {
        data
    } = props

    return (
        <Container>
            {
                data.map((item, index) =>
                    <Text key={index}>
                        <Thumbnail>{item.thumbnail}</Thumbnail>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </Text>
                )
            }
        </Container>
    )
}

const Container = styled.div`
    margin: ${pxToRem(72)} 0;
`
const Text = styled.div`
    color: #111;
    h2 {
        font-size: ${pxToRem(46)};
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: ${pxToRem(16)};
    }
    p {
        font-size: ${pxToRem(18)};
        font-weight: 400;
        line-height: 1.6;
        white-space: pre-wrap;
    }
`;
const Thumbnail = styled.div`
    color: #111;
    font-size: ${pxToRem(15)};
    font-weight: 400;
    line-height: 1.4;
`;

export default Title;