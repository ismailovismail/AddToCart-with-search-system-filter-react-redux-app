import React from 'react'
import { connect } from 'react-redux'
import { addBlogToDatabase } from '../../../actions/blogAction'
import BlogForm from './BlogForm'

const AddBlog = (props) => {
  return (
    <div className='mt-5'>
    <h3 className='text-center mt-2'>Add Blog</h3>
    <BlogForm onBlogSubmit={(fd)=>{
        props.dispatch(addBlogToDatabase(fd))
        props.history.push('/admin')
    }}/>
    </div> 
  )
}

export default connect()(AddBlog)