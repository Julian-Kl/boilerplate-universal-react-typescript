import React from 'react'
import { Helmet } from 'react-helmet'

export const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name='description' content='This is Home' />
            </Helmet>
            <p>Startseite</p>
        </>
    )
}
