import React, {useState} from 'react';
import styled from 'styled-components';
import {AiOutlineEllipsis, AiOutlineSearch} from "react-icons/ai/index";
import PopupMenu from "../PopupMenu";
import {Link} from "react-router-dom";
import axios from "axios";

function TopHeader (props) {

    const {} = props;

    const [ popupmenu, handleMenu ] = useState(false);
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

    function useLocalState(localItem) {
        const [ loc, setState ] = useState(localStorage.getItem(localItem));

        function setLoc(newItem) {
            localStorage.setItem(localItem, newItem);
            setState(newItem);
        }

        return [loc, setLoc];
    }

    const [ value, setValue ] = useLocalState("search")

    return (
        <Container>
            <Logo to={"/"}>
                <svg width="32" height="32" className="_1Jlgk" version="1.1" viewBox="0 0 32 32"
                     aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                </svg>
                <Text>
                    <p className={"logo"}>Unsplash</p>
                    <p className={"text"}>Photos for everyone</p>
                </Text>
            </Logo>
            <SearchInput>
                <SearchSubmit type={"submit"} onClick={handleSubmit} to={"/search"}>
                    <AiOutlineSearch color={"#666"} size={"26"} />
                </SearchSubmit>
                <input
                    onChange={(e) => {
                        setValue({
                            ...value,
                            search: e.target.value
                        })
                    }}
                   className={"search"}
                   type="text"
                   name={"photo"}
                   placeholder={"Search free high-resolution photos"}
                />
                {
                    result.map((photo) => {
                        return <img src={photo.urls.small} alt={"photo"} onChange={handleChange}/>
                    })

                }
            </SearchInput>

            <Menu>
                <Linked>Topics</Linked>
                <Linked>Explore</Linked>
                <Linked onClick={() => {
                    handleMenu(true)
                }}><AiOutlineEllipsis size={"30"}/></Linked>
                {
                    popupmenu &&
                    <PopupMenu handleMenu={handleMenu}/>
                }
                <Button>
                    <Linked className={"btnSubmit"}>Submit a photo</Linked>
                    <Linked className={"btnLogin"} to={"login"}>Login</Linked>
                    <Linked className={"btnJoin"} to={"Join"}>Join free</Linked>
                </Button>
            </Menu>
        </Container>
    )
}

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  flex-wrap:wrap;
  margin: 0 10px;
  padding: 10px 0;
`
const Logo = styled.div`
  position:relative;
  top: 0;
  bottom: 0;
  left: 0;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex-wrap: wrap;
  flex-direction:row;
  flex: 1 1 0;
  cursor:pointer;
`;
const Text = styled.div`
  margin-left: 10px;
  color: #111;
  
  .logo {
      font-weight:bold;
      color: #111;
      font-size: 16px;
      padding: 0;
      margin: 0;  
  }
  .text {
      font-weight:600;
      color: #111;
      font-size: 14px;
      padding: 0;
      margin: 0;
  }
`;
const SearchInput = styled.div`
  height: 36px;
  background: #eee;
  border-radius: 50px;
  display:flex;
  align-items:center;
  flex: 4 1 0;  
  padding: 5px 10px;
  .search {
    width: 100%;
    height: 100%;
    background: none;
    margin-left: 10px;
    border: 0;
    font-size: 16px;
    background: none;
  }
`;
const SearchSubmit = styled(Link)`
    cursor: pointer;
`;
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content: flex-end;
  flex: 3 1 0;
    
`;
const Linked = styled(Link)`
    width: auto;
    padding: 20px;
    color: #666;
    font-size: 15px;
    font-weight:600;
    cursor: pointer;
    &:hover {
      color: #111;
    }
`;
const Button = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: center;
  .btnSubmit {
    background-color: #fff;
    border: 1px solid #aaa;
    padding: 6px 12px;
    border-radius: 5px;
    font-weight: bold;
    margin-right: 60px;
    cursor: pointer;
    &:hover {
      color: #111;
      border: 1px solid #666;
    }
  }
    
  .btnLogin {
    position:relative;
    top: 0;
    left: 0;
    cursor: pointer;
    padding: 10px 20px;
    margin-right: 10px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -18px;
      width: 1px;
      height: 100%;
      background: #aaa;
    }
  }
  .btnJoin {
    background-color: #3cb46e;
    border: 1px solid #aaa;
    padding: 6px 12px;
    border-radius: 5px;
    font-weight: bold;
    border: none;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #37a866;
    }
  }
`;
export default TopHeader;