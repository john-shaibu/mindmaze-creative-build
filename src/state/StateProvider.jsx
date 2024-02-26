import { useReducer } from "react";
import { StateContext } from "./StateContext"

function reducer(state, action) {
    if (action.type === 'showModal') {
        return {
            ...state,
            show: true,
            modal: action.modal
        }
    }
    if (action.type === 'hideModal') {
        return {
            ...state,
            show: false,
            modal: ''
        }
    }
    if (action.type === 'setSound') {
        return {
            ...state,
            sound: true,
        }
    }
    if (action.type === 'disableSound') {
        return {
            ...state,
            sound: false,
        }
    }
    if (action.type === 'enableSfx') {
        return {
            ...state,
            sfx: true,
        }
    }
    if (action.type === 'disableSfx') {
        return {
            ...state,
            sfx: false,
        }
    }
    throw Error('Unknown action.');
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { show: false, modal: '', sound: true, sfx: true });
    return <StateContext.Provider value={{ globalState: state, showModal: (modal) => dispatch({ type: 'showModal', modal}), hideModal: () => dispatch({ type: 'hideModal'}), setSound: (bool) => bool ? dispatch({ type: 'enableSound' }) : dispatch({ type: 'disableSound' }), setSfx: (bool) => bool ? dispatch({ type: 'enableSfx' }) : dispatch({ type: 'disableSfx' })}}>
        { children }
    </StateContext.Provider>
}

export default StateProvider