import React from 'react'
import { connect } from 'react-redux'
import { editBlogFromDatabase, removeBlogFromDatabase } from '../../../actions/blogAction'
import BlogForm from './BlogForm'

 const Edit = (props) => {
  return (
    <div className='mt-5'>
     <div className="d-flex justify-content-center my-5">
     <button className='btn btn-danger' onClick={()=>{
          props.dispatch(removeBlogFromDatabase(props.pvalue.id))
          props.history.push('/admin')
     }}>Delete</button>
     </div>
     <h1 className='text-center'>Edit Blog</h1>
  
      <BlogForm editblog={props.pvalue} onBlogSubmit={(a)=>{
            props.dispatch(editBlogFromDatabase(props.pvalue.id,a))
            props.history.push('/admin')
      }} />
      
    </div>
  )
}

const mapStateToProps=(state,props)=>{
      return {
        pvalue:state.blogreducer.find((b)=>{
          return b.id === props.match.params.id
        })
      }
}
export default connect(mapStateToProps)(Edit)