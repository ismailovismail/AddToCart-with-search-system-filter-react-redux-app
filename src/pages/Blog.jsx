import React from 'react'

import { connect } from 'react-redux'
import { useState } from 'react'
import BlogCards from '../Components/BlogCards'
import { useEffect } from 'react'

const Blog = (props) => {
const [data,setData]=useState(props.pvalue)
const[searchTerm,setSearchTerm]=useState('')
useEffect(()=>{
const btns=document.querySelectorAll('.buttons button')
for (let index of btns) {
        index.onclick=()=>{
            document.querySelector('button.active').classList.remove('active')
            index.classList.add('active')
        }
}
},[])
  return (
    <section className='products'>
   <div className="container-fluid">
    <div className="head">
             <h1 className=' products-title text-center mt-2'>Products</h1>
              <div className="search-bar d-flex justify-content-center">
                <input onChange={(e)=>{setSearchTerm(e.target.value)}} className='rounded p-2' type="text" placeholder='Search here...' />
              </div>
                 <div className="buttons d-flex justify-content-center gap-2">
            <button onClick={()=>{
                setData(
                    props.pvalue.filter((item)=>{
                        return item
                    })
                )
            }} className='active btn btn-outline-dark'>All</button>
            <button onClick={()=>{
                setData(
                    props.pvalue.filter((item)=>{
                        return item.title === 'Acer'
                    })
                )
            }} className='btn btn-outline-dark'>Acer</button>
            <button onClick={()=>{
                setData(
                    props.pvalue.filter((item)=>{
                        return item.title === 'Asus'
                    })
                )
            }} className='btn btn-outline-dark'>Asus</button>
            <button onClick={()=>{
                setData(
                    props.pvalue.filter((item)=>{
                        return item.title === 'HP'
                    })
                )
            }} className='btn btn-outline-dark'>Hp</button>
            <button onClick={()=>{
               setData(
                props.pvalue.filter((item)=>{
                    return item.title ==='Dell'
                })
               )
            }} className='btn btn-outline-dark'>Dell</button>
        </div>
    </div>
     <div className='row g-2 mt-3'>

        {  
           data
           .filter((val)=>{
            if (searchTerm === '') {
                return val
            }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
           })

            
            
            .map((fd,i)=>{
                return(
                    <BlogCards 
                    key={i}
                    title={fd.title}
                    text={fd.text}
                    id={fd.id}
                    price={fd.price}
                    addcart={fd}
                    img={fd.img}
                    />
                )
            })
        }
        
    </div>
   </div>
   </section>
  )
}
const mapStatetoProps =(state)=>{
    return{
        pvalue:state.blogreducer
    }
}

export default connect (mapStatetoProps)(Blog)