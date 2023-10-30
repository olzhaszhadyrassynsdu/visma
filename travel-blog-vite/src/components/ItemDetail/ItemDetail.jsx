import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import style from './ItemDetail.module.css'
import { Link } from 'react-router-dom'

export const ItemDetail = () => {
    const [ state, setState ] = useState({
        isError: false,
        isLoading: true
    })
    const [ detail, setDetail ] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        console.log(id)
        const ctrl = new AbortController()
        const fetchData = async (id) => {
            setState({
                isError: false,
                isLoading: true
            })
            axios.get(`https://fakestoreapi.com/products/${id}`, { signal: ctrl.signal })
                .then((res) => {
                    setState({ isLoading: false, isError: false })
                    return setDetail(res.data)
                })
                .catch(err => {
                    console.log(err.request);
                    setState({ isLoading: false, isError: true })
                    return setDetail({})
                })
        }
        if (id) {
            fetchData(id)
        }
        return () => {
            ctrl.abort()
        }
    }, [id])

    if (state.isLoading)
        return <div>Loading...</div>

    if (state.isError) {
        return <div>Error!</div>
    }
  return (
    <div className={style.wrapper}>
        <h2>{detail.title}</h2>
        <img src={detail.image}></img>
        <h4>{detail.description}</h4>
        <h4>Category: {detail.category}</h4>
        <h4>Price: ${detail.price}</h4>
        <Link to="/">Go Back</Link>
    </div>
  )
}
