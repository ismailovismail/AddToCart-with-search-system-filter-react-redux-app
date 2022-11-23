import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
const BlogCards = ({id,title,text,price,addcart,img}) => {
  const {addItem}=useCart()
  return (
    <div className='col-12 col-sm-9 col-md-6 col-lg-6 col-xl-4'>
<div className="card">
<img src={img} width={100} height={300} className=" p-0 card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <h4> $ {price}</h4>
    <button onClick={()=>{addItem(addcart,alert('success'))}} className=' mx-2 btn btn-primary'>AddtoCart</button>
    <Link to={`blog/${id}`} className='btn btn-primary'>Learn More</Link>
  </div>
</div>
    </div>
  )
}

export default BlogCards