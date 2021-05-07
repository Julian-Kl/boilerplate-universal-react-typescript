import React from 'react'
import { Helmet } from 'react-helmet'
import ExampleImage from '../../assets/images/ExampleImage.png'

export const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name='description' content='This is Home' />
            </Helmet>
            <p>Homepage</p>
            <img src={ExampleImage}></img>
        </>
    )
}
