import { Start } from './routes/start/start'

interface routeObjects {
    path: string | string[]
    exact: boolean
    component: React.ReactNode
}

const routes: routeObjects[] = [
    {
        path: '/',
        exact: true,
        component: Start
    }
]

export default routes