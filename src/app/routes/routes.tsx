import { Start } from './start/start'
import { Events } from './events/events'

interface routeObjects {
    path: string | string[]
    exact: boolean
    component: React.ReactNode
}

const routes: routeObjects[] = [
    {
        path: '/',
        exact: true,
        component: Start,
    },
    {
        path: '/events',
        exact: true,
        component: Events,
    },
]

export default routes
