import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home/Home.jsx'
import { ItemDetail } from './ItemDetail/ItemDetail.jsx'

export const Router = () => {
  return (

    <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<ItemDetail />} path="/item/:id"></Route>
            <Route path='*' element={<div>not found</div>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
