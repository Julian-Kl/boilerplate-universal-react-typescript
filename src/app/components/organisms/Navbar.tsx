import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeObject } from '../../routes/routes'
import './navbar.scss'

interface Props {
    routes: routeObject[]
}

export const Navbar: React.FC<Props> = ({ routes }: Props) => {
    return (
        <ul className='navbar'>
            {routes.map(({ name, path }, key) => (
                <li key={key}>
                    <NavLink to={{ pathname: path }}>{name}</NavLink>
                </li>
            ))}
        </ul>
    )
}
