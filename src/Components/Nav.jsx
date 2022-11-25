
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'


const Nav = () => {

const {totalItems}=useCart()
 
 
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
        <li className="nav-item">
         <NavLink  className='nav-link' exact to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/blog' className='nav-link'>Blog</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
         <div className="nav-buttons d-flex gap-2"> 
         <Link to='/carts' className=' p-1 btn btn-primary'>Carts ({totalItems})</Link>
        
          <Link to='/authentication' className=' p-1 btn btn-primary'> <i className='fa-solid fa-user'></i> Admin</Link>
        
         </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav