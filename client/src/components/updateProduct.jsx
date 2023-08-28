import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FormCreateProduct from '../components/FormCreateProduct'
import DeleteButton from './DeleteButton'

const UpdateProduct = () => {
    const [product, setProduct] = useState("")
    const [loaded, setLoaded] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/products/" + id)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            }
              )
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (productParams) => {
        axios.put('http://localhost:8000/products/' + id, productParams)
        .then(res => {
            console.log(res);
            navigate("/products"); // this will take us back to the Main.js
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h3 className='mb-3 text-center'>Update Product</h3>
        <div className='d-flex flex-column'>
            <div>
                {
                    loaded && <FormCreateProduct onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
                }
            </div>
            <div className="container w-50 d-flex justify-content-center align-items-center">
                <DeleteButton productId={product._id} successCallback={ () => navigate("/") } />
            </div>
        </div>
    </div>
  )
}

export default UpdateProduct