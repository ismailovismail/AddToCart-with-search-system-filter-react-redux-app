import React from 'react'
import { Link } from 'react-router-dom'
const DashboardItems = ({count,title,text,id,price,img}) => {
  return (
    <>
    <tr>
      <th scope="row">{count+1}</th>
      <td>{id}</td>
      <td><img width={70} src={img} alt="" /></td>
      <td>{title}</td>
      <td>{text}</td>
      <td>{price}</td>
      <td><Link to={`/edit/${id}`} className='btn btn-danger'>Edit</Link></td>
    </tr>
    </>
  )
}

export default DashboardItems