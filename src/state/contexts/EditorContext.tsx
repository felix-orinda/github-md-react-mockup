import React from "react";

const APP_NAME = 'eucossa-markdown-app-00103321'

const editorActions = {
    CHANGE_THEME: 'CHANGE_THEME',
    EDIT_MARKDOWN: 'EDIT_MARKDOWN',
    DELETE_MARKDOWN: 'DELETE_MARKDOWN',
    TOGGLE_PREVIEW: 'TOGGLE_PREVIEW',

}
const initialState = JSON.parse(localStorage.getItem(APP_NAME)!) ? JSON.parse(localStorage.getItem(APP_NAME)!) : {
    markdown: '',
    preview: false,
    theme: { name: '', theme: null }
}

const EditorReducer = (state, action) => {
    switch (action.type) {
        case editorActions.CHANGE_THEME:
            return {
                ...state,
                theme: action.payload,
            }
        case editorActions.EDIT_MARKDOWN:
            return {
                ...state,
                markdown: action.payload,
            }
        case editorActions.DELETE_MARKDOWN:
            return {
                ...state,
                markdown: action.payload,
            }
        case editorActions.TOGGLE_PREVIEW:
            return {
                ...state,
                preview: state.preview ? false : true,
            }
        default:
            return state
    }
}

const EditorContext = React.createContext(initialState)

const EditorProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(EditorReducer, initialState)
    React.useEffect(() => {
        localStorage.setItem(APP_NAME, JSON.stringify(state))
    }, [state])
    return (
        <EditorContext.Provider value={{ state, dispatch }}>
            {children}
        </EditorContext.Provider>
    )
}

export { EditorContext, EditorProvider, editorActions }
