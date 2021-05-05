import React from 'react'
import { routeObject } from '../../../router/routes'
import { NavbarElement } from '../../molecules/NavbarElement/NavbarElement'
import './navbar.scss'

interface Props {
    routes: routeObject[]
}

export const Navbar: React.FC<Props> = ({ routes }: Props) => {
    return (
        <ul className='navbar'>
            {routes.map(({ name, path }, key) => (
                <NavbarElement key={key} name={name} path={path} />
            ))}
        </ul>
    )
}
