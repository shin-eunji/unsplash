import {createBrowserHistory} from 'history';

const HISTORY = createBrowserHistory();

const navigate = url => {
    HISTORY.push(url);
}


export {HISTORY, navigate}