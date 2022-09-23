import React from 'react'

const PageWrapper = ({ children }) => {
    return (
        <div className='max-w-7xl'>
            {
                children
            }
        </div>
    )
}

export default PageWrapper