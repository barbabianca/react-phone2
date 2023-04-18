import React from 'react'
import  Navigation from './components/Navigation'
import ProductList from './components/ProductList'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navigation />
      <Hero  />
      <ProductList />
      <Footer />
      
    </div>
  )
}

export default App