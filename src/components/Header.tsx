import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { editorActions, EditorContext } from '../state/contexts/EditorContext'
import styles from './Header.module.css'
import themes from '../utils/themes'
const Header = () => {
    const { state, dispatch } = React.useContext(EditorContext)
    const togglePreview = () => {
        dispatch({ type: editorActions.TOGGLE_PREVIEW })
    }
    
    const handleThemeChange = (e) => {
        // const selectedTheme = themes.find(theme => theme.name === e.target.value)
        const selectedTheme = Object.values(themes.themes).find(theme => theme.name === e.target.value)
        dispatch({ type: editorActions.CHANGE_THEME, payload: { name: e.target.value, theme: selectedTheme } })
    }

    return (
        <div className={styles.header_wrapper}>

            <div className={styles.header_container}>
                <div>
                    {/* <FontAwesomeIcon icon={faBars} size={'2x'} className="cursor-pointer" /> */}
                    <h2 className=''>Tech-Friday MD</h2>
                </div>
                <div className={styles.header_right_wrapper}>
                    <select name="select" id="" onChange={handleThemeChange} className="bg-orange-700 text-zinc-100 w-24 border-white px-1 h-fit rounded text-sm md:text-lg">
                        {
                            Object.keys(themes.themes).map((key) => {
                                return (
                                    <option key={key} value={key} className="bg-blue-800">{key}</option>
                                )
                            })
                        }
                    </select>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm'>Preview</span>
                        <button onClick={e => {
                            togglePreview()
                        }}
                            className="flex items-center justify-between"
                        >

                            {
                                state.preview ? <FontAwesomeIcon icon={faToggleOn} className="text-md md:text-xl" /> : <FontAwesomeIcon icon={faToggleOff} className="text-md md:text-xl" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header