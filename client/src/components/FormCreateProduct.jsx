import React, { useState } from 'react'

const FormCreateProduct = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ title, price, description });
    }

  return (
    <div className="container w-50 mt-3">
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
                    <input className="btn btn-primary mb-3" type="submit" value="Submit" />
                </div>
            </form>
    </div>
  )
}

export default FormCreateProduct