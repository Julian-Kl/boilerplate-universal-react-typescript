import { Home } from './home/Home'
import { Subpage1 } from './route1/Subpage1'

interface routeObjects {
    path: string | string[]
    exact: boolean
    component: React.ReactNode
}

const routes: routeObjects[] = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/subpage1',
        exact: true,
        component: Subpage1,
    },
]

export default routes
