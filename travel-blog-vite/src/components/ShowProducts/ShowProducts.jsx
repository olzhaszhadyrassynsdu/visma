import React from 'react'
import style from './ShowProducts.module.css'
import { Link } from 'react-router-dom'

export const ShowProducts = ({product}) => {
  return (
    <div className={style.wrapper}>
        <img src={product.image} alt="#"></img>
        <h3>{product.title}</h3>
        <h4>${product.price}</h4>
        {/* <a href="#">read more...</a> */}
        <Link to={`/item/${product.id}`}>Read more...</Link>
    </div>
  )
}
