import { useReducer } from "react";
import { ModalContext } from "./ModalContext"

function reducer(state, action) {
    if (action.type === 'showModal') {
        return {
            show: true,
            modal: action.modal
        }
    }
    if (action.type === 'hideModal') {
        return {
            show: false,
            modal: ''
        }
    }
    throw Error('Unknown action.');
}

const ModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { show: false, modal: '' });
    return <ModalContext.Provider value={{ state, showModal: (modal) => dispatch({ type: 'showModal', modal}), hideModal: () => dispatch({ type: 'hideModal' }) }}>
        { children }
    </ModalContext.Provider>
}

export default ModalProvider