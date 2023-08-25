import React, { useState } from 'react'
import axios from 'axios'

const FormCreateProduct = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDecription] = useState("")

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
            })
            .catch(err => console.log(err))
    }

  return (
    <div className="container w-50 mt-5">
        <h1 className='mb-5'>Product Manager</h1>
        <form onSubmit={ onSubmitHandler }>
                <div className="input-group mb-3">
                    {/* When the user types in this input, our onChange synthetic event 
                        runs this arrow function, setting that event's target's (input) 
                        value (what's typed into the input) to our updated state   */}
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Title:</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={ (e) => setTitle(e.target.value) }/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Price:</span>
                    <input className="text form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={ (e) => setPrice(e.target.value) }/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-default">Description:</span>
                    <textarea className="text form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={ (e) => setDecription(e.target.value) }/>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <input className="btn btn-primary mb-3" type="submit" value="Create" />
                </div>
            </form>
    </div>
  )
}

export default FormCreateProduct