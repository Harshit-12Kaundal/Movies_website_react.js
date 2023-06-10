import React from 'react'
import { useState , useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import './App.css'

function App(){


  useEffect(()=>{
    apitesting();
  },[]);
  const apitesting = () =>{
    fetchDataFromApi('https://api.themoviedb.org/3/movie/changes')
      .then((res) => {
        console.log(res)
      })
  }
  return (
    <div className='App'>App</div>
  )
}

export default App
