import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Routes from "./Routes";
import {HISTORY} from './lib/History'
import {appActions} from "./redux/actionCreators";
import {pxToRem} from "./common/Text/Text.Styled";

function App (props) {

    const {
    } = props;

    useEffect(() => {
        HISTORY.listen((location, action) => {
            if(action === 'PUSH') {
                window.scrollTo(0, 0)
            }
        })
    },[])

    const useTitle = () => {
        const [title, setTitle] = useState(null);

        const updateTitle = () => {
            const htmlTitle = document.querySelector("title");
            htmlTitle.innerHTML = title;
        };
        useEffect(updateTitle, [title]);

        return setTitle;
    };

    const changeTitle = useTitle();

    return (
        <Container>
            <Routes />
        </Container>
    )
}

const Container = styled.div`
`
export default App;