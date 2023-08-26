import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const DisplayOneProduct = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/products/" + id)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

  return (
    <div className='container w-50 mt-5'>
      <div className="card">
        <div className="card-header text-center fw-bold">
          { product.title }'s Page!
        </div>
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item fw-semibold">Title: { product.title }</li>
            <li className="list-group-item fw-semibold">Price: $ { product.price}</li>
            <li className="list-group-item fw-semibold">Description: { product.description}</li>
          </ul>
        </div>
        <div className="card-body">
          <hr />
          <Link to='/products' className="card-link text-center">All Products</Link>
        </div>
      </div>
    </div>
  )
}

export default DisplayOneProduct