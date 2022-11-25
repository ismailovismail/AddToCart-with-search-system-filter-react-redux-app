import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Nav from '../Components/Nav'
import BlogDetails from '../pages/BlogDetails'
import Dashboard from '../pages/admin/Dashboard'
import AddBlog from '../pages/admin/update/AddBlog'
import Edit from '../pages/admin/update/Edit'
import Carts from '../pages/Carts'
import Admin from '../pages/admin/Admin'
import { CartProvider } from 'react-use-cart'
const AppRouter = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <Nav/>
    <Switch>
      <Route path='/'exact component={Home}></Route>
      <Route path='/blog' exact component={Blog} ></Route>
      <Route path='/blog/:id'  component={BlogDetails}></Route>
      <Route path='/admin' component={Dashboard}></Route>
      <Route path='/authentication' component={Admin}></Route>
      <Route path='/add' component={AddBlog}></Route>
      <Route path='/edit/:id' component={Edit}></Route>
      <Route path='/carts' component={Carts}></Route>
    </Switch>
    </CartProvider>
    </BrowserRouter>
  )
}

export default AppRouter