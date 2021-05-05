import React from 'react'
import { NavbarLink } from '../../atoms/NavbarLink/NavbarLink'
import './navbar-element.scss'

interface Props {
    key: number
    path: string
    name: string
}

export const NavbarElement: React.FC<Props> = (props: Props) => {
    return (
        <li key={props.key}>
            <NavbarLink path={props.path} name={props.name} />
        </li>
    )
}
