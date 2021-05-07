import React from 'react'
import { Helmet } from 'react-helmet'
import ExampleImage from '../../assets/images/ExampleImage.png'
import Happy from '../../assets/icons/happy.svg'

export const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name='description' content='This is Home' />
            </Helmet>
            <p>Homepage</p>
            <img src={ExampleImage}></img>
            <img src={Happy} height='200' width='200'></img>
        </>
    )
}
