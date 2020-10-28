import React, {useState} from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';
import {pxToRem} from "../../../common/Text/Text.Styled";
import axios from 'axios'
import Details from "../../pages/Details/Details";
import {navigate} from "../../../lib/History";

function Search(props) {

    const {} = props;

    const [photo, setPhoto] = useState({})
    const [clientId, setClientId] = useState('t_jbP7JejOj1keyZ7UiEl1BZcoPHG3vxmy3rPUGhVRc')

    const [result, setResult] = useState([])

    const handleChange = (e) => {
        setPhoto(e.target.value);
    }

    const handleSubmit = () => {

        const url = `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=${clientId}`
        axios.get(url)
            .then(res => {
                navigate('/photo')
                console.log("photo", res);
                setResult(res.data.results)
            })
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit()
        }
    }

    return (
        <Container>
            <Icon onClick={handleSubmit} />
            <Input name="search"
                   placeholder="Search free high-resolution photos"
                   onChange={handleChange}
                   onKeyPress={handleKeyPress}
            />
            {
                result.map((item, index) => <Details {...item} />)
            }
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
export default Search;