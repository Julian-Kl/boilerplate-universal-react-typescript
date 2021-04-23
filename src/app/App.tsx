import React, { StrictMode } from 'react'

interface AppProps {
    name: string
}

export const App: React.FC<AppProps> = (props) => {
    return(
        <StrictMode>
            <p>Hello {props.name}</p>
        </StrictMode>
    );
}