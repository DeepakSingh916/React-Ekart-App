import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'

const ProductImage = () => {
    const {id} = useParams()

    const [prodImage, setProdImage] = useState({});

    useEffect(() => {
        const filterImage = items.filter((product) => product.id == id);
        setProdImage(filterImage[0])
    }, [id])

  return (
    <div>
        <img src={prodImage.imgsrc} width="650px" style={{marginLeft:"300px", marginTop:"100px", marginBottom:"60PX"}}/>
    </div>
  )
}

export default ProductImage