import React from 'react';
import styled from 'styled-components';
import {AiOutlineEllipsis} from 'react-icons/ai'
import {pxToRem, TextLink} from "../../../../../common/Text/Text.Styled";
import {Button} from "../../../../../common/Button/Button.Styled";
import {photoActions} from "../../../../../redux/actionCreators";
import {useSelector} from "react-redux";
import QuickMenu from "./QuickMenu";

function Menu (props) {

    const {} = props;

    const { quickMenu } = useSelector(state => state.photo)

    const handleMore = () => {
        photoActions.updateState({ quickMenu: !quickMenu })
    }

    return (
        <Container>
            <MenuItem>Explore</MenuItem>
            <MenuItem>Unsplash Awards</MenuItem>
            <MenuItem>
                <Icon onClick={handleMore}/>
                {
                    quickMenu &&
                        <QuickMenu/>
                }
            </MenuItem>
            <PhotoButton sort={'line'}>Submit a photo</PhotoButton>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    align-items:center;
    padding: 0 ${pxToRem(30)};
`
const MenuItem = styled(TextLink)`
    padding: ${pxToRem(20)} ${pxToRem(12)};
`;
const PhotoButton = styled(Button)`
    display:flex;
    align-items:center;
    justify-content:center;
    width: ${pxToRem(124)};
    height: ${pxToRem(32)};
    color: #767676;
    font-size: ${pxToRem(14)};
    font-weight: 500;
    margin-left: ${pxToRem(24)};
    &:hover {
        color: #111;
    }
    &::after {
        content: '';
        position:relative;
        top: ${pxToRem(0)};
        right: ${pxToRem(-36)};
        width: ${pxToRem(1)};
        height: ${pxToRem(30)};
        background: #d1d1d1;
    }
`;
const Icon = styled(AiOutlineEllipsis)`
    width: ${pxToRem(30)};
    height: ${pxToRem(30)};
    font-weight:900;
`;
export default Menu;