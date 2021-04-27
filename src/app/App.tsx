import React, { StrictMode } from 'react'
import { Router } from './routes/Router'

export const App: React.FC = () => {
    return (
        <StrictMode>
            <Router />
        </StrictMode>
    )
}
