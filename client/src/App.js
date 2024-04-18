import React,{useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import toast,{ Toaster } from 'react-hot-toast'
import './App.css'
import Header from './components/Header'

import Player from './components/Player'



function Main() {


    return (

        <>
        <Toaster />
        <Header />
        <div className='main-container'>
          <Outlet context={{}} />
        </div>
        <Player />
 
        </>
        
  )
}

export default Main
