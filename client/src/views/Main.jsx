import React, { useState } from 'react'
import axios from 'axios'
import FormCreateProduct from '../components/FormCreateProduct'
import DisplayAllProducts from '../components/DisplayAllProducts'

const Main = () => {
  const [products, setProducts] = useState([])
    
    //handler when the form is submitted
    const createProduct = (productParams) => {
      //make a post request to create a new person
      axios.post("http://localhost:8000/api/products", productParams)
          .then(res => {
              console.log(res)   // always console log to get used to tracking the data!
              console.log(res.data)
              // we will update the lifted state of our products array 
              //    to include the current value in state plus the single 
              //    new object created and returned from our post request. 
              setProducts([...products, res.data])
          })
          .catch(err => console.log(err))
  }

  return (
    <div>
      <h3 className='mb-3 text-center'>Create Product</h3>
      <FormCreateProduct onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
      <hr/>
      <DisplayAllProducts products={products} setProducts={setProducts} />
    </div>
  )
}

export default Main