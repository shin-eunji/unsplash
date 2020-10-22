import React from 'react';
import styled from 'styled-components';
import PostDetails from "./PostDetails";
import {useSelector} from "react-redux";
import {photoActions} from "../../../../redux/actionCreators";

function PostList (props) {

    const {
        id,
        urls,
    } = props;

    const { over, openPopup } = useSelector(state => state.photo)

    const handleOver = () => photoActions.updateState({toggleOver: true })
    const handleLeave = () => photoActions.updateState({toggleOver: false})

    const popup = () => photoActions.updateState({openPopup: true})

    return (
        <Container>
            <Photo key={id}
                   onClick={popup}
                   onMouseEnter={handleOver}
                   onMouseLeave={handleLeave}
            >
                <img src={urls.small}/>
                {
                    over &&
                        <InfoBox />
                }
                {
                    openPopup &&
                        <PostDetails openPopup={popup}/>
                }
            </Photo>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    width: 33%;
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
      width: 100%;
      height: 100%;
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
export default PostList;