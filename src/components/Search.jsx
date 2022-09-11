import React, { useState } from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext()

  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text) {
      setSearchTerm(text)
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }

  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={text}
          className='form-input'
          type='text'
          placeholder='Type favorite meal'
        />
        <button className='btn' type='submit'>
          Search
        </button>
        <button
          className='btn btn-hipster'
          type='button'
          onClick={handleRandomMeal}>
          Surprise me!
        </button>
      </form>
    </header>
  )
}

export default Search
