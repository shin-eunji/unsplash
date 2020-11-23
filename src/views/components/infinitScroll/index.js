import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {createIntersectionObserver} from "../../../lib/Utill";

function InfiniteScroll (props) {

    const {
        children,
        isInView = () => {},
        isOutView = () => {}
    } = props;



    const sentineRef = useRef(null)

    const oi = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    isInView()
                } else {
                    isOutView(entry)
                }
            })
        }
    )


    let observerInstance = new IntersectionObserver((entry, observer) => {}, {
        root: document.querySelector('#root'),
        rootMargin: '0px',
        threshold: 1.0
    });

    useEffect(() => {
        const io = createIntersectionObserver((entry) => {
            if(entry.isIntersecting) {
                // 핸들러
                console.log("call");
            } else {
                console.log("out view");
            }
        }, {})

        if(sentineRef.current) {
            io.observe(sentineRef.current)
        }
    }, [])

    return (
        <Container>
            {children}

        </Container>
    )
}

const Container = styled.div`
`

const S = styled.div`
    
`;
export default InfiniteScroll;