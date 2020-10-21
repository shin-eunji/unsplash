import React, {useState} from 'react';
import styled from 'styled-components';
import Popup from "./Popup";

import {AiOutlineArrowDown, AiOutlinePlus, AiTwotoneHeart} from "react-icons/ai";

function Post (props) {

    const {
        item
    } = props;
    
    const [ popup, handlePopup ] = useState(false)

    const [ over, handleMouseover ] = useState(false)

    return (
        <Container>
            <Photo
                onClick={() => {
                    handlePopup(true)
                }}
                onMouseEnter={() => handleMouseover(true)}
                onMouseLeave={() => handleMouseover(false)}
                >
                {
                    over &&
                    <InfoBox className={"info"}>
                        <Profile>
                            <img src="https://images.unsplash.com/profile-1548365137797-3b9f72fd78b2?auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff" alt="profile"/>
                            <p>title</p>
                            <button>
                                <AiOutlineArrowDown/>
                            </button>
                        </Profile>
                        <Button>
                            <button>
                                <AiTwotoneHeart className={"heart"}/>
                            </button>
                            <button>
                                <AiOutlinePlus className={"plus"}/>
                            </button>
                        </Button>
                    </InfoBox>
                }
                <img src={item.urls.small} />
            </Photo>
            {
                popup &&
                <Popup onClose={handlePopup} />
            }
        </Container>
    )
}

const Container = styled.div`
`
const Photo = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: zoom-in;
`;
const InfoBox = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(0,0,0,.3), rgba(0,0,0,.0), rgba(0,0,0,.3));
      display:flex;
      flex-direction:row;
      align-items: flex-end;
      justify-content:flex-start;
`;
const Profile = styled.div`
    display:flex;
    width: 100%;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    margin: 20px;
    
    img {
      width: 30px;
      height: 30px;
      border-radius: 30px;
    }
    p {
      margin-left: 10px;
      color: #fff;
      flex: 1 0 0;
    }
    button {
      text-align:center;
      padding: 4px 10px;
      color: #666;
      font-size: 20px;
      border-radius: 5px;
      border: none;
      background-color: rgba(255,255,255,.9);
      display:flex;
      align-items:center;
      &:hover {
        background: #fff;
        color: #000;
      }  
    }
`;
const Button = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    display:flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: flex-end;
    button {
      background: rgba(255,255,255,.9);
      border-radius: 5px;
      padding: 6px 10px;
      border: none;
      display:flex;
      align-items:center;
      font-size: 20px;
      margin-left: 10px;
      font-weight:bold;
      color: #666;
      &:hover {
        background: #fff;
        color: #000;
      }  
    }
`;
export default Post;