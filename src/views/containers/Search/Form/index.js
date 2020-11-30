import React, {useState} from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {navigate} from "../../../../lib/History";

function SearchForm(props) {

    const {
        shape = 'round',
        onSubmit = () => {}
    } = props;

    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        navigate(`/s/photos/${value}`)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit()
        }
    }

    return (
        <Container classNames={cn('SearchForm', shape)}>
            <Label>
            <Icon onClick={handleSubmit} />
            <Input name="photo"
                   type="text"
                   value={value}
                   placeholder="Search free high-resolution photos"
                   onChange={handleChange}
                   onKeyPress={handleKeyPress}
            />
            </Label>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
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
    cursor: pointer;
`;
const Label = styled.label`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    padding: ${pxToRem(4)} ${pxToRem(10)};
    
    .round & {
      
    }
    .square & {
    
    }
`;
const Input = styled.input`
    flex: 1;
    height: ${pxToRem(30)};
    border: none;
    background: none;
    margin-left: ${pxToRem(10)};
`;

export default SearchForm;