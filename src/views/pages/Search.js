import React, {useState} from 'react';
import styled from 'styled-components';
import axios from "axios";
import TopHeader from "../components/Main/Header/TopHeader";

function Search (props) {

    const {
    } = props;

    const [ photo, setPhoto ] = useState("");
    const [ clientId, setClientId ] = useState("t_jbP7JejOj1keyZ7UiEl1BZcoPHG3vxmy3rPUGhVRc");
    const [ result, setResult ] = useState([]);

    function handleChange(e) {
        setPhoto(e.target.value)
    }

    function handleSubmit(e) {
        const url = `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=${clientId}`;

        axios.get(url).then((res) => {
            setResult(res.data.results)
        })
    }

    return (
        <Container>
            <TopHeader/>
            <ImgBox>
            {
                result.map((photo) => {
                    return <img src={photo.urls.small} alt={"photo"} />
                })

            }
            </ImgBox>
        </Container>
    )
}

const Container = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 5px rgba(0,0,0,.15);
`
const ImgBox = styled.div`
    
`;
export default Search;