import React from 'react';
import styled from 'styled-components';
import {Index, subTitle} from "../../components/Text/Title";
import Title from "../../components/Text/Title/Title";
import {pxToRem} from "../../../common/Text/Text.Styled";
import {ContentContainer} from "../../../common/Layout/Components.Styled";
import SubTitle from "../../components/Text/Title/SubTitle";

function Topics (props) {

    const {} = props;

    return (
        <Container>
            <SContentContainer>
                <Title data={Index.topics} />
                <SubTitle data={subTitle.all} />
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    top: ${pxToRem(112)};
`
const SContentContainer = styled(ContentContainer)`
    
`;
export default Topics;