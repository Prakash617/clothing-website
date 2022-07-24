import { useQuery } from '@apollo/client';
import React from 'react'
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail'
import { QUERY_PRODUCT_CATEGORY } from '../../graphql/query';


type Props = {}
const ProductDetail = (props: Props) => {
  const { data: categoryData } = useQuery(QUERY_PRODUCT_CATEGORY);
  console.log(categoryData)
  return (
    <>
    
    <ProductDetailComponent categoryData={categoryData} id={undefined}/>
    </>
  )
}

export default ProductDetail