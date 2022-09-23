import React from 'react'
import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { EditorContext } from '../state/contexts/EditorContext'
import { themes } from '../utils/themes'
import remarkGfm from 'remark-gfm'


const MarkDownComponent = ({ markdown }) => {

    const { state: { theme } } = React.useContext(EditorContext)
    const [current, setCurrent] = React.useState('')
    React.useEffect(() => {
        const currentTheme = Object.keys(themes.themes).find(k => k === theme.name)
        console.log("Current theme", currentTheme);

        currentTheme !== undefined && setCurrent(themes.themes[currentTheme])
    }, [theme, themes])

    console.log(theme,current);

    return (
        <div>
            <ReactMarkdown
                children={markdown}
                remarkPlugins={[[remarkGfm, {singleTilde: false,}]]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={current === undefined ? themes.themes['darcula'] : current}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </div>
    )
}

export default MarkDownComponent