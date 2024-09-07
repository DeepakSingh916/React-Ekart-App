import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const SearchItem = ({ addToCart }) => {

  const {term} = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
     const filterData=()=>{
       const element = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
       setData(element)
     }
    filterData();
  }, [term])

  return (
    
    <Product items={data} addToCart={addToCart}/>
  )
}

export default SearchItem