import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import style from './Admin.module.css'
export default function Admin() {
  let navigate = useNavigate()
  return (
      <>
          

      <div className='d-flex align-items-center justify-content-center py-3  '>
        <NavLink to={'/admin/mainTable/vegetable'} className='text-decoration-none fs-2 mx-3'>Vegetables</NavLink>
        <NavLink to={'/admin/mainTable/fruits'} className='text-decoration-none fs-2 mx-3'>Fruits</NavLink>
        <NavLink to={'/admin/mainTable/meat'} className='text-decoration-none fs-2 mx-3'>Meat</NavLink>
        <NavLink  to={'/admin/mainTable/herbals'} className='text-decoration-none fs-2 mx-3'>Herbals</NavLink>
        <NavLink   to={'/admin/mainTable/milk'} className='text-decoration-none fs-2 mx-3'>Milk</NavLink>
      </div>
    

      <Outlet/>
      
    </>
  )
}
