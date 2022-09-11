import React from 'react'
import Favorites from './components/Favorites'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Search from './components/Search'
import './App.css'

const App = () => {
  return (
    <main>
      <Search />
      <Favorites />
      <Meals />
      <Modal />
    </main>
  )
}

export default App
