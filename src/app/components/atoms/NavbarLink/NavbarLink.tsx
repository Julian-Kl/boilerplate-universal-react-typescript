import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar-link.scss'

interface Props {
    path: string
    name: string
}

export const NavbarLink: React.FC<Props> = (props: Props) => {
    return (
        <NavLink to={{ pathname: props.path }} className='navbar-link' exact>
            {props.name}
        </NavLink>
    )
}
