import React from 'react'
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <h1>My App</h1>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        Welcome
                        <div>
                            <Link to='/main'>Go to Main</Link>
                        </div>
                    </Route>
                    <Route path='/main'>
                        Main

                    </Route>
                    <Route path='/city'>
                        City
                        <div>
                            <Link to='/main'>Back to Main</Link>
                        </div>
                    </Route>
                    <Route>
                        Not Found
                        <div>
                            <Link to='/main'>Back to Main</Link>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
