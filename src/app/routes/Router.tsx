import React from 'react'
import routes from './routes'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NoMatch } from './404/NoMatch'

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <p>Navbar placeholder</p>
            <Switch>
                {routes.map(({ path, exact, component }, key) => (
                    <Route key={key} path={path} exact={exact}>
                        {component}
                    </Route>
                ))}
                <Route key='404' render={() => <NoMatch />} />
            </Switch>
        </BrowserRouter>
    )
}
