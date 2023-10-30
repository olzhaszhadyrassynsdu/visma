import axios from 'axios'

export const ProductService = {

    async getAll() {
        const responce = await axios.get('https://fakestoreapi.com/products')
        return responce.data
    },

    async createItem(data) {
        return fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: `{${data.title}}`,
                    price: `{${data.price}}`,
                    description: 'lorem ipsum set',
                    image: `{${data.image}}`,
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
  
}
