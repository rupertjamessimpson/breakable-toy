import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PokemonPage from './PokemonPage'
import HomePage from './HomePage'
import PokemonShow from './PokemonShow'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pokemon" component={PokemonPage} />
          <Route exact path="/pokemon/:name" component={PokemonShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App