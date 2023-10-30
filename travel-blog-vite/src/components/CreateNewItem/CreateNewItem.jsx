import React from 'react'
import style from './CreateNewItem.module.css'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProductService } from '../../services/product.service'

export const CreateNewItem = ({createProduct}) => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onChange'})

  const queryClient = useQueryClient()

  const { mutate } = useMutation(['create item'], (data) => ProductService.createItem(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('products')
      reset()
    }
  })

  const onSubmit =  data => {
    mutate({data, id: Date.now()})
    createProduct(data)
  }

  return (
    <div className={style.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Create new item</h2>
          <input 
            {...register('title', {required:'title is required'})}
            placeholder='title of the new item'
          />{errors?.title?.message && <p style={{color:'red'}}>title is required</p>}
          <input 
            {...register('price', {required:'price is required'})}
            placeholder='price of the new item' 
          />{errors?.price?.message && <p style={{color:'red'}}>price is required</p>}
          <input 
            {...register('image', {required:true})}
            placeholder='image of the new item' 
          />
          <button>Create</button>
        </form>
    </div>
  )
}
