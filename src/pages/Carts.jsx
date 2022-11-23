import React from 'react'
import {useCart} from 'react-use-cart'

const Carts = () => {
    const{items,cartTotal,removeItem,emptyCart,updateItemQuantity}=useCart()

  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope='col'>Quantity</th>
      <th scope='col'>Del</th>
    </tr>
  </thead>
  <tbody>
    {
        items.map((fd,i)=>{
            return <tr>
            <th scope="row">{i+1}</th>
            <td><img width={70} src={fd.img} alt="" /></td>
            <td>{fd.title}</td>
            <td>{fd.price * fd.quantity}</td>
            <td><button onClick={()=>updateItemQuantity(fd.id, fd.quantity + 1)} className='btn btn-primary'>+</button> {fd.quantity} <button onClick={()=>updateItemQuantity(fd.id, fd.quantity - 1)} className='btn btn-primary'>-</button> </td>
            <td><button onClick={()=>{removeItem(fd.id)}} className='btn btn-danger'>Delete</button></td>
          </tr>
        })
    }
  </tbody>
</table>
<div className="container">
<div className="row">
<h2 className='col-9 col-sm-9 col-md-9 col-lg-10'>Total Price: {cartTotal}</h2>
<button onClick={()=>{emptyCart()}} className='col-3 col-sm-3 col-md-3 col-lg-1 btn btn-danger'>Delete All</button>
</div>
</div>
    </div>
  )
}

export default Carts