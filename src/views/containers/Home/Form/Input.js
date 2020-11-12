import React from 'react';
import styled from 'styled-components';
import {pxToRem} from "../../../../common/Text/Text.Styled";

function Input(props) {

    const {
        label,
        type,
        name,
        register,
        placeholder,
        error,
    } = props;

    return (
        <Container name={name}>
            <Label>{label}</Label>
            {
                name === 'username' && <span>(only letters, numbers, and underscores)</span>
            }
            {
                name === 'password' && <span>(min. 6 char)</span>
            }
            <InputText type={type}
                       name={name}
                       ref={register}
                       register={register}
                       placeholder={placeholder}
            />
            <Message name={name}
                     error={error}
                     register={register}
            />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin-bottom: ${pxToRem(6)};
    font-size: ${pxToRem(15)};
    font-weight: 400;
    line-height: 1.6;
    color: #111;
    ${props => props.name === 'firstname' && `
        display: inline-block;
        width: 48%;
    `}
    ${props => props.name === 'lastname' && `
        display: inline-block;
        width: 48%;
    `}
    
    span {
      color: #767676;
      margin-left: ${pxToRem(4)};
    }
    &input:-internal-autofill-selected {
        background: #fff;
    }
`
const Label = styled.label`
    margin-bottom: ${pxToRem(6)};
    font-size: ${pxToRem(15)};
    font-weight: 400;
    line-height: 1.6;
    &input:focus  {
        color: #e25c3d;
    }
`;
const InputText = styled.input`
    width: 100%;
    height: ${pxToRem(40)};
    border-radius: ${pxToRem(2)};
    border: 1px solid #767676;
    margin-bottom: ${pxToRem(20)};
    padding: ${pxToRem(20)} ${pxToRem(10)};
    background: #fff;
    &:focus {
        border: 1px solid #e25c3d;
        outline: none;
        box-shadow: none;
        background: #fff;
        + label {
            color: #e25c3d;
      }
    }
`;
const Message = styled.div`
    
`;
export default Input;