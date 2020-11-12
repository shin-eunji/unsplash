import React, {useEffect} from 'react';
import styled from 'styled-components';
import {pxToRem, TextLink} from "../../../../common/Text/Text.Styled";
import {navigate} from "../../../../lib/History";
import {ContentContainer} from "../../../../common/Layout/Components.Styled";
import {topicsActions} from "../../../../redux/actionCreators";
import {useSelector} from "react-redux";
import LnbItem from "./LnbItem";

function Lnb(props) {

    const {} = props;

    const {list = []} = useSelector(state => state.topics);

    const menus = list.map((item) => ({
        title: item.title,
        slug: item.slug
    }))

    useEffect(() => {
        topicsActions.getTopics()
    }, [])

    return (
        <Container>
            <SContentContainer>
                <Item onClick={() => navigate('/')}>Editorial</Item>
                <Menu>
                    {
                        menus.map((item, index) => <LnbItem key={index} {...item}/>)
                    }
                </Menu>
                <Item onClick={() => navigate('/t')}>View all</Item>
            </SContentContainer>
        </Container>
    )
}

const Container = styled.div`
`
const SContentContainer = styled(ContentContainer)`
    display:flex;
    position:relative;
    align-items:center;
    width: 100%;
    height: ${pxToRem(56)};
    justify-content: flex-start;
`
const Item = styled(TextLink)`
    position:relative;
    left: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    height: 100%;
`;
const Menu = styled.div`
    flex: 1;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width: calc(100% + 7.5rem);
    height: 100%;
    overflow-x: scroll;
    padding-right: ${pxToRem(120)};
    margin: 0 ${pxToRem(60)} 0 ${pxToRem(16)};
    > * &:last-child {
        padding-right: ${pxToRem(32)};
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        width: 1px;
        height: ${pxToRem(32)};
        background: #aaa;
        margin: ${pxToRem(12)} 0;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: ${pxToRem(52)};
        width: ${pxToRem(100)};
        height: 100%;
        background: linear-gradient(to right, rgba(255,255,255,.2), rgba(255,255,255,.7), rgba(255,255,255,1));
    }
`;
export default Lnb;