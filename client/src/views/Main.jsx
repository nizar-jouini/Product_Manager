import React, { useState } from 'react'
import FormCreateProduct from '../components/FormCreateProduct'
import DisplayAllProducts from '../components/DisplayAllProducts'

const Main = (props) => {
    const [products, setProducts] = useState([])

  return (
    <div>
        <FormCreateProduct products={products} setProducts={setProducts} />
        <hr/>
        <DisplayAllProducts products={products} setProducts={setProducts} />
    </div>
  )
}

export default Main