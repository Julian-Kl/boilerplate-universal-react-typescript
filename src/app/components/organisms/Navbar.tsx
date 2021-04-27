import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeObject } from '../../routes/routes'

interface Props {
    routes: routeObject[]
}

export const Navbar: React.FC<Props> = ({ routes }: Props) => {
    return (
        <ul>
            {routes.map(({ name, path }, key) => (
                <li key={key}>
                    <NavLink
                        activeStyle={{ fontWeight: 'bold' }}
                        to={{ pathname: path }}
                    >
                        {name}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
