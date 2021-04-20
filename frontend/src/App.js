import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    return(
      <Router>
        <Header/>
          <main className="py-3">
            <Container>
              <Route path='/' component={HomePage} exact/>
              <Route path='/product/:id' component={ProductPage}/>
            </Container>
          </main>
        <Footer/>
      </Router>
    )
}

export default App;
