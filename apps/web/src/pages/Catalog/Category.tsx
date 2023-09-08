import React from 'react'
import { Link } from 'react-router-dom'
import './catalog.css'

interface Category {
    category: string
}
const Category:React.FC<Category> = ({category}) => {
  return (
    <div className='card'><Link to={`/Products/${category}`}>{category}</Link></div>
  )
}
  

export default Category;