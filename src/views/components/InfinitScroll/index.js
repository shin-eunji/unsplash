import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {createIntersectionObserver} from "../../../lib/Utill";
import {pxToRem} from "../../../common/Text/Text.Styled";

function InfiniteScroll (props) {

    const {
        children,
        isInView = () => {},
         isOutView = () => {}
    } = props;



    const sentinelRef = useRef(null);

    useEffect(() => {
        const io = createIntersectionObserver((entry) => {
                isInView(entry)
            }, (entry) => {
                isOutView(entry)
            }, {})

        if(sentinelRef.current) {
            io.observe(sentinelRef.current)
        }
    }, [])

    return (
        <Container>
            {children}
            <Sentinel ref={sentinelRef}/>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
`
const Sentinel = styled.div`
  position: absolute;
  bottom: ${pxToRem(150)};
  left: 0;
  right: 0;
  z-index: 100;
  height: ${pxToRem(10)};
      
`;

export default InfiniteScroll;