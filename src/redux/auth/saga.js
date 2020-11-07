import {all, takeLatest, put} from 'redux-saga/effects'
import {Action} from './redux'
import firebase from '../../lib/Firebase'
import {navigate} from "../../lib/History";
import {authActions} from "../actionCreators";


export default function* () {
    yield all([
        takeLatest(Action.Types.SIGN_UP, function* ({data}) {
            console.log("[Saga Sign Up] data", data);
            yield firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(res => {
                    console.log("[Saga] SIGN_UP", res);
                    navigate('/sign/join')
                })
                .catch(function (error) {
                    console.log("error", error);
                });
        }),

        takeLatest(Action.Types.SIGN_IN, function* ({data}) {
            console.log("data", data);
            yield firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                .then(res => {
                    console.log("[Saga] SIGN_IN", res);
                    navigate('/sign/login')
                })
                .catch(function (error) {
                    console.log("error", error);
                    navigate('/')
                });
        }),

        takeLatest(Action.Types.GET_USER_INFO, function* () {
            yield firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    console.log("[Saga] GET_USER_INFO", user);
                    authActions.updateState({
                        user: {
                            email: user.email
                        },
                        onLoad: true
                    })
                } else {
                    console.log("error");
                    authActions.updateState({
                        user: null,
                        onLoad: true,
                    })
                }
            })

        }),

        takeLatest(Action.Types.SIGN_OUT, function* () {
            yield firebase.auth().signOut()
                .then(res => {
                    console.log("[Saga] SIGN_OUT", res);
                    navigate('/')
                })
                .catch(function (error) {
                    console.log("error", error);
                });
        }),
    ])
}