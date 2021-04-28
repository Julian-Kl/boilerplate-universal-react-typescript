import React from 'react'
import { Helmet } from 'react-helmet'

export const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name='description' content='Home' />
                <meta property='og:title' content='Home' />
            </Helmet>
            <p>Startseite</p>
        </>
    )
}
