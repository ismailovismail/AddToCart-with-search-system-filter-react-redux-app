import React from 'react'
import { useState } from 'react'

const BlogForm = (props) => {
    const [formTitle,setFormTitle]=useState(props.editblog?props.editblog.title:'')
    const [formText,setFormText]=useState(props.editblog?props.editblog.text:'')
    const [formPrice,setFormPrice]=useState(props.editblog?props.editblog.price:'')
    const [formImg,setFormImg]=useState(props.editblog?props.editblog.img:'')
    const [alert,setAlert]=useState('')
    const [error,setError]=useState('')
    const formSubmit=(e)=>{
     e.preventDefault()
     if (!formTitle || !formText || !formPrice) {
        setAlert('alert alert-danger')
        setError('Fill in the blanks')
     }else{
        setAlert('')
        setError('')
        props.onBlogSubmit({
            title:formTitle,
            text:formText,
            price:formPrice,
            img:formImg
        })

     }
    }
  return (
    <>
    <div className="container " style={{width:'100%'}}>
        <form onSubmit={formSubmit} className='row d-flex justify-content-center align-items-center g-2  flex-column' style={{width:'100%'}}>
            <label className='col-10 col-sm-10 col-md-12 col-lg-7 text-center' htmlFor="text">Add Image</label>
            <input value={formImg} onChange={(e)=>{setFormImg(e.target.value)}} className='p-2 rounded col-10 col-sm-10 col-md-12 col-lg-7' type="text" placeholder='Add Image' />
            <label className='col-10 col-sm-10 col-md-12 col-lg-7 text-center' htmlFor="text">Add Title</label>
            <input value={formTitle} onChange={(e)=>{setFormTitle(e.target.value)}} className='p-2 rounded col-10 col-sm-10 col-md-12 col-lg-7' type="text" placeholder='Add Title' />
            <label className='col-10 col-sm-10 col-md-12 col-lg-7 text-center' htmlFor="title">Add Text</label>
            <input value={formText} onChange={(e)=>{setFormText(e.target.value)}} className='p-2 rounded col-10 col-sm-10 col-md-12 col-lg-7' type="text" placeholder='Add Text' />
            <label className='col-10 col-sm-10 col-md-12 col-lg-7 text-center' htmlFor="title">Add price</label>
            <input value={formPrice} onChange={(e)=>{setFormPrice(Number(e.target.value))}} className='p-2 rounded col-10 col-sm-10 col-md-12 col-lg-7' type="text" placeholder='Add Price' />
            <button className=' col-10 col-sm-10 col-md-12 col-lg-7  btn btn-primary'>Submit</button>
            <h1 className={`col-10 col-sm-10 col-md-12 col-lg-7 ${alert}`}>{error}</h1>
        </form>
    </div>

    </>
  )
}

export default BlogForm