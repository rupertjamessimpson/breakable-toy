import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PokemonPage from './PokemonPage'
import HomePage from './HomePage'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pokemon" component={PokemonPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App