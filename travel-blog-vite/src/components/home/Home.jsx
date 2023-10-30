import React from 'react'
import style from './home.module.css'
import { ShowProducts } from '../ShowProducts/ShowProducts'
import { CreateNewItem } from '../CreateNewItem/CreateNewItem'
import { ProductService } from '../../services/product.service.js'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export const Home = () => {

    const {data, isLoading, error} = useQuery(['products'], () => ProductService.getAll())
    console.log(data)

    const [products, setProducts] = useState(data)

    console.log('testing', products)
    

    const createProduct = (product) => {
        setProducts([product, ...data])
    }

    // console.log(products, 'test')

  return (
    <div className={style.wrapper}>
        <h1>Online shop</h1>
        <CreateNewItem createProduct={createProduct}/>
        <div>
            <h2>Items in the shop</h2>
            {
                data?.map(product => (
                    <ShowProducts key={product.id} product={product}/>
                ))
            }
        </div>
    </div>
  )
}
