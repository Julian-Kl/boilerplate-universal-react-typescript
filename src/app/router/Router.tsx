import React from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import { NoMatch } from '../pages/404/NoMatch'
import { Navbar } from '../components/organisms/Navbar/Navbar'

export const Router: React.FC = () => {
    return (
        <>
            <Navbar routes={routes} />
            <Switch>
                {routes.map(({ path, exact, component }, key) => (
                    <Route key={key} path={path} exact={exact}>
                        {component}
                    </Route>
                ))}
                <Route key='404' render={() => <NoMatch />} />
            </Switch>
        </>
    )
}
