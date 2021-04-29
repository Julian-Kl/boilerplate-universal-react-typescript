import React from 'react'
import { Helmet } from 'react-helmet'

export const Subpage1: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Subpage1</title>
                <meta name='description' content='This is Subpage1' />
            </Helmet>
            <p>Subage1</p>
        </>
    )
}
