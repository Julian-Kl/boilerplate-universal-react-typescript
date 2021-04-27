import { Start } from './routes/start/start'
import { Events } from './routes/events/events'
import { Key } from 'react'

interface routeObjects {
    key: Key
    path: string | string[]
    exact: boolean
    component: React.ReactNode
}

const routes: routeObjects[] = [
    {
        key: '/',
        path: '/',
        exact: true,
        component: Start,
    },
    {
        key: '/events',
        path: '/events',
        exact: true,
        component: Events,
    },
]

export default routes
