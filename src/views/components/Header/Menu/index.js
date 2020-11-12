import React from 'react';
import styled from 'styled-components';
import {AiOutlineEllipsis} from 'react-icons/ai'
import {pxToRem, TextLink} from "../../../../common/Text/Text.Styled";
import {Button, lineButton} from "../../../../common/Button/Button.Styled";
import {appActions} from "../../../../redux/actionCreators";
import {useSelector} from "react-redux";
import Index from "../../QuickMenu";
import {navigate} from "../../../../lib/History";
import SubmitPhotos from "../../Submit";

function Menu (props) {

    const {} = props;

    const { quickMenu } = useSelector(state => state.app)
    const { submitPhoto } = useSelector(state => state.app)

    const handleMore = () => {
        appActions.updateState({ quickMenu: !quickMenu })
    }

    const handleSubmit = () => {
        appActions.updateState({ submitPhoto: true })
    }

    return (
        <Container>
            <MenuItem>Brands</MenuItem>
            <MenuItem onClick={() => navigate('/explore')}>Explore</MenuItem>
            <MenuItem>
                <Icon onClick={handleMore}/>
                {
                    quickMenu &&
                        <Index/>
                }
            </MenuItem>
            <IconButton sort={'line'}
                         onClick={handleSubmit}
            >Submit a photo</IconButton>
            {
                submitPhoto &&
                    <SubmitPhotos/>
            }
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
const IconButton = styled(lineButton)`
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