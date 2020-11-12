import React, {useState} from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';
import {pxToRem} from "../../../../common/Text/Text.Styled";
import {navigate} from "../../../../lib/History";
import {searchActions} from "../../../../redux/actionCreators";
import {useSelector} from "react-redux";

function SearchForm(props) {

    const {} = props;

    const [values, setValue] = useState("")

    const handleChange = (e) => {
        setValue({
            ...values,
            query: e.target.value
        })
    }

    const handleSubmit = () => {
        console.log("values", values);
        searchActions.searchPhotos(values)
        navigate('/s/photos/:query')
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit()
        }
    }

    return (
        <Container>
            <Icon onClick={handleSubmit} />
            <Input name="photo"
                   type="text"
                   placeholder="Search free high-resolution photos"
                   onChange={handleChange}
                   onKeyPress={handleKeyPress}
            />
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
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
    cursor: pointer;
`;
const Input = styled.input`
    flex: 1;
    height: ${pxToRem(30)};
    border: none;
    background: none;
    margin-left: ${pxToRem(10)};
`;
export default SearchForm;