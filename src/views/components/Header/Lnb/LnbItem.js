import React from 'react';
import styled from 'styled-components';
import {navigate} from "../../../../lib/History";
import {pxToRem, TextLink} from "../../../../common/Text/Text.Styled";
import cn from 'classnames'

function LnbItem (props) {

    const {
        title,
        slug
    } = props;

    return (
        <Container>
            <Item onClick={() => navigate(`/t/${slug}`)}
                  className={cn(slug, {isActive: slug === slug})}
            >{title}</Item>
        </Container>
    )

}

const Container = styled(TextLink)`
    display:flex;
`
const Item = styled.div`
    padding-left: ${pxToRem(32)};
    white-space: pre;
    cursor: pointer;
    &.isActive {
        opacity: 1;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            transform: skew(-15deg);
            z-index: -1;
      }
    }
`;
export default LnbItem;