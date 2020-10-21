import React from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';
import {pxToRem} from "../../../common/Text/Text.Styled";

function Search (props) {

    const {} = props;

    return (
        <Container>
            <Icon/>
            <Input name="search"
                   placeholder="Search free high-resolution photos"
            />
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: ${pxToRem(4)} ${pxToRem(10)};
`
const Icon = styled(AiOutlineSearch)`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
    font-size: 30px;
    font-weight: 900;
    color: #767676;
`;
const Input = styled.input`
    flex: 1;
    height: ${pxToRem(30)};
    border: none;
    background: none;
    margin-left: ${pxToRem(10)};
`;
export default Search;