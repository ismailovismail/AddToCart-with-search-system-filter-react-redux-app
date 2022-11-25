import React from 'react'

const BlogDetailItems = ({title,id,text,img,price}) => {
  
  return (
    <div>
     <ul>
        <li>Blog ID:{id}</li>
        <li>Blog img: <img width={400} src={img} alt="" /> </li>
        <li>Blog Title:{title}</li>
        <li>Blog Text:{text}</li>
        <li>Blog Price:{price}</li>
     </ul>
    </div>
  )
}

export default BlogDetailItems