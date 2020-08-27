const initialState = {
    isLoggedin: false,
    info: {},
}

const Action = {
    Types: {
        UPDATE_STATE: "@@USER/UPDATE_STATE"
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        })
    }
}

Action.Creators.updateState();

const reducer =  (state= initialState, action) => {
    switch (action.type) {
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
        default: return state;
    }
}

export {reducer, Action}