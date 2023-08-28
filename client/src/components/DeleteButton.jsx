import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { productId, successCallback } = props

    const deleteProduct = () => {
        axios.delete("http://localhost:8000/api/products/" + productId)
        .then((res)=>{
            successCallback()
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div>
        <button type="submit" className="btn btn-danger" onClick={ deleteProduct }>Delete</button>
    </div>
  )
}

export default DeleteButton