import { useReducer } from "react";
import { StateContext } from "./StateContext"
import { useEffect } from "react";
import { useAsync } from "../hooks/useAsync";
import { loadSounds } from "../utils";

function reducer(state, action) {
    if (action.type === 'setGameState') {
        return {
            ...state,
            gameState: action.gameState
        }
    }
    if (action.type === 'endGame') {
        return {
            ...state,
            gameState: 'play',
            modal: 'gameanalysis',
            show: true,
            tryCount: action.gameParams.tryCount,
            timeSpent: action.gameParams.timeSpent,
            streak: action.gameParams.streak,
        }
    }
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
    if (action.type === 'toggleSound') {
        return {
            ...state,
            sound: !state.sound,
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
    if (action.type === 'toggleSfx') {
        return {
            ...state,
            sfx: !state.sfx,
        }
    }
    throw Error('Unknown action.');
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { gameState: 'start', show: false, modal: '', sound: false, sfx: false, timeSpent: 0, tryCount: 0, streak: 0 });
    const {loading, value, error} = useAsync(loadSounds('screen sound', 'assets/joy.mp3'))
    let sound = state.sound

    useEffect(() => {
        if (!error && value) sound ? value.audio.play() : value.audio.pause()
    }, [sound])

    return <StateContext.Provider value={{ globalState: state, endGame: (gameParams) => dispatch({ type: 'endGame', gameParams }), setGameState: (gameState) => dispatch({ type: 'setGameState', gameState }), showModal: (modal) => dispatch({ type: 'showModal', modal }), hideModal: () => dispatch({ type: 'hideModal' }), toggleSound: () => dispatch({ type: 'toggleSound' }), setSound: (bool) => bool ? dispatch({ type: 'enableSound' }) : dispatch({ type: 'disableSound' }), toggleSfx: () => dispatch({ type: 'toggleSfx' }), setSfx: (bool) => bool ? dispatch({ type: 'enableSfx' }) : dispatch({ type: 'disableSfx' }) }}>
        {children}
    </StateContext.Provider>
}

export default StateProvider