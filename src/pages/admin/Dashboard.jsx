import React from 'react'
import { connect } from 'react-redux'
import DashboardItems from '../../Components/DashboardItems'
import { Link } from 'react-router-dom'
const Dashboard = (props) => {
  return (
    <div>
        <Link to='/add' className=' mx-3 mt-2 btn btn-primary'>Add Item </Link>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope='col'>IMG</th>
      <th scope="col">Name</th>
      <th scope="col">Model</th>
      <th scope='col'>Price</th>
    </tr>
  </thead>
  <tbody>
  {
    props.pvalue.map((fd,i)=>{
        return <DashboardItems key={i} {...fd} count={i} />
    })
  }
  </tbody>
</table>
    </div>
  )
}

const mapStateToProps=(state)=>{
     return{
        pvalue:state.blogreducer
     }
}
export default connect(mapStateToProps) (Dashboard)