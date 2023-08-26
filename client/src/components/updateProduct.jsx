import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            }
              )
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/products/' + id, {
            title,    // this is shortcut syntax for title: title
            price,    // this is shortcut syntax for price: price
            description    // this is shortcut syntax for description: description
        })
        .then(res => {
            console.log(res);
            navigate("/products"); // this will take us back to the Main.js
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="container w-50 mt-5">
        <form onSubmit={ updateProduct }>
            <div className="input-group mb-3">
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <span className="input-group-text w-25">title:</span>
                <input type="text" className="form-control" name='title' value={title} onChange={ (e) => setTitle(e.target.value) }/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text w-25">Price:</span>
                <input className="text form-control" name='price' value={price} onChange={ (e) => setPrice(e.target.value) }/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text w-25">Description:</span>
                <input className="text form-control" name='description' value={description} onChange={ (e) => setDescription(e.target.value) }/>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <input className="btn btn-primary mb-3" type="submit" value="Update" />
            </div>
        </form>
    </div>
  )
}

export default UpdateProduct