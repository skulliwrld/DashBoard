import React from 'react'
import ProductUpdateForm from '@/components/ProductUpdateForm';
import { fetchProductData } from '@/utills/dataFETCH';


async function ProductEdit({params}) {
    const {id} = params
    console.log(id)
    const products = await fetchProductData(id)

  return (
    <ProductUpdateForm content={JSON.parse(JSON.stringify(products))} />
  )
}

export default ProductEdit