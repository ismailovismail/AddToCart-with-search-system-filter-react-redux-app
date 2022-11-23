import React from 'react'
import { connect } from 'react-redux'
import BlogDetailItems from '../Components/BlogDetailItems'

const BlogDetails = props => {
  return (
    <div>
       <BlogDetailItems {...props.pvalue}/>
    </div>
  )
}
const mapStateToProps=(state,props)=>{
    return{
        pvalue:state.blogreducer.find((info)=>{
            return info.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(BlogDetails)