import React, { useState } from 'react'
import axios from 'axios'

const FormCreateProduct = (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const {products, setProducts} = props

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault()
        //make a post request to create a new person
        axios.post("http://localhost:8000/api/products", {
            title,    // this is shortcut syntax for title: title
            price,    // this is shortcut syntax for price: price
            description    // this is shortcut syntax for description: description
        })
            .then(res => {
                console.log(res)   // always console log to get used to tracking the data!
                console.log(res.data)
                // we will update the lifted state of our products array 
                //    to include the current value in state plus the single 
                //    new object created and returned from our post request. 
                setProducts([...products, res.data])
            })
            .catch(err => console.log(err))
        setTitle("")
        setPrice()
        setDescription("")
    }

  return (
    <div className="container w-50 mt-5">
        <h1 className='mb-5'>Product Manager</h1>
        <form onSubmit={ onSubmitHandler }>
                <div className="input-group mb-3">
                    {/* When the user types in this input, our onChange synthetic event 
                        runs this arrow function, setting that event's target's (input) 
                        value (what's typed into the input) to our updated state   */}
                    <span className="input-group-text w-25">Title:</span>
                    <input type="text" className="form-control" onChange={ (e) => setTitle(e.target.value) } value={title}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25">Price:</span>
                    <input className="text form-control" onChange={ (e) => setPrice(e.target.value) } value={price}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25">Description:</span>
                    <textarea className="text form-control" onChange={ (e) => setDescription(e.target.value) } value={description}/>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <input className="btn btn-primary mb-3" type="submit" value="Create" />
                </div>
            </form>
    </div>
  )
}

export default FormCreateProduct