import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const DisplayAllProducts = (props) => {
    const {products, setProducts} = props

    useEffect(() => {
      axios.get('http://localhost:8000/api/products')
          .then(res => {
              console.log(res.data)
              setProducts(res.data)
          })
          .catch(err => console.log(err))
    }, [setProducts])

    const removeFromDom = productId => {
        setProducts(products.filter(product=> product._id !== productId))
  }

    return (
    <div className="container w-75">
        <h1 className='text-center'>List of Products</h1>
        <table className="table table-light table-striped table-hover text text-center mt-3">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, i) => (
                        <tr key={i}>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>{ product.description }</td>
                            <td className='d-flex justify-content-center align-items-center'>
                                <Link to={`/products/${ product._id }`}>Show</Link>
                                <Link to={`/products/edit/${ product._id }`} className='mx-3'>Edit</Link>
                                <DeleteButton productId={product._id} successCallback={ () => removeFromDom(product._id) } />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    )
}

export default DisplayAllProducts