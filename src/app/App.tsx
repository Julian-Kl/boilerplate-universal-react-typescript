import React, { StrictMode } from 'react'
import { Router } from './router/Router'

export const App: React.FC = () => {
    return (
        <StrictMode>
            <Router />
        </StrictMode>
    )
}
