import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
