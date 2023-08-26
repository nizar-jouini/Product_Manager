import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DisplayAllProducts = (props) => {
    const { products, setProducts } = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [setProducts])

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
                            <td><Link to={`/products/${ product._id }`}>{ product.title }'s Page!</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    )
}

export default DisplayAllProducts