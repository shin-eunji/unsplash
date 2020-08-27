import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Post from "./Post";
import axios from 'axios'

function Content (props) {

    const {

    } = props;

    const [post, setPost ] = useState([])

    useEffect(() => {
        axios.get("https://api.unsplash.com/photos/?client_id=t_jbP7JejOj1keyZ7UiEl1BZcoPHG3vxmy3rPUGhVRc").then(res => {
            const data = res.data;
            setPost(data);
            console.log("data", data);
        })
    }, [])

    return (
        <Container>
            <PostList>
                {
                    post.map((item, index) => {
                        return <Post key={index} item={item}/>
                    })
                }
            </PostList>

        </Container>
    )
}

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
const PostList = styled.div`
  width: 1200px;
  display:flex;
  flex-wrap: wrap;
  align-items:flex-start;
  justify-content: space-between;
  margin: 40px 0;
`;


export default Content;