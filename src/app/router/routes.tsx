import { Home } from './../pages/home/Home'
import { Subpage1 } from './../pages/route1/Subpage1'

export interface routeObject {
    path: string
    name: string
    exact: boolean
    component: React.ReactNode
}

const routes: routeObject[] = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: Home,
    },
    {
        path: '/subpage1',
        name: 'Subpage1',
        exact: true,
        component: Subpage1,
    },
]

export default routes
