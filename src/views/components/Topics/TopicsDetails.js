import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {topicsActions} from "../../../redux/actionCreators";
import {pxToRem} from "../../../common/Text/Text.Styled";

function TopicsDetails (props) {

    const {
        data
    } = props;

    return (
        <Container>
            <Box>
                <Text>
                    <Title>
                        <Flat></Flat>
                        Status
                    </Title>
                    <Description>
                        <Status sort={data?.featured}>
                            <Icon sort={data?.featured}></Icon>
                            {data?.status}
                        </Status>
                    </Description>
                </Text>
                <Text>
                    <Title>
                        <Flat></Flat>
                        Curator
                    </Title>
                    <Description>
                        {
                            data?.owners.map((item) =>
                                <Curator>
                                    <img src={item.profile_image.small} alt={item.name}/>
                                </Curator>)
                        }
                    </Description>
                </Text>
                <Text>
                    <Title>
                        <Flat></Flat>
                        Contributions
                    </Title>
                    <Description>{data?.total_photos}</Description>
                </Text>
                <Text>
                    <Title>
                        <Flat></Flat>
                        Top contributors
                    </Title>
                    <Description>{
                        data?.top_contributors.map((item) =>
                            <Contributors>
                                <img src={item.profile_image.small} alt={item.name}/>
                            </Contributors>
                        )
                    }</Description>
                </Text>
            </Box>
            <Button>Submit to {data?.title}</Button>
        </Container>
    )
}

const Container = styled.div`
`
const Box = styled.div`
    border: 1px solid #eee;
    border-radius: ${pxToRem(3)};
    padding: ${pxToRem(10)};
`;
const Text = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    height: ${pxToRem(40)};
    border-bottom: 1px solid #eee;
    padding: ${pxToRem(6)} 0;
    &:last-child {
        border-bottom: none;
    }
`;
const Title = styled.div`
    flex: 1;
`;
const Description = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;
const Flat = styled.div`
    
`;
const Status = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(66)};
    height: ${pxToRem(24)};
    border-radius: ${pxToRem(5)};
    text-transform: capitalize;
    ${props => props.sort === true && `
        background: #c2ebd3;
    `}  
    ${props => props.sort === false && `
        background: #f6cbc1;
    `}  
`;
const Icon = styled.div`
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
    display: inline-block;
    border-radius: ${pxToRem(10)};
    margin-right: ${pxToRem(6)};
    ${props => props.sort === true && `
        background: #3cb46e;
    `}  
    ${props => props.sort === false && `
        background: #e25c3d;
    `}  
`;
const Curator = styled.div`
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
`;
const Contributors = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: ${pxToRem(40)};
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    overflow: hidden;
    margin-left: ${pxToRem(8)};
    img {
    }
`;
const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height: ${pxToRem(44)};
    color: #fff;
    font-size: ${pxToRem(15)};
    font-weight: 400;
    background: #111;
    border-radius: ${pxToRem(3)};
`;
export default TopicsDetails;