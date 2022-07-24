import { useQuery } from '@apollo/client/react/hooks/useQuery'
import { useRouter } from 'next/router'
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail'
import { QUERY_PRODUCT_CATEGORY } from '../../graphql/query'

const Post = () => {
  const router = useRouter()
  console.log(router)
  const { pid } = router.query
  const { data: categoryData } = useQuery(QUERY_PRODUCT_CATEGORY);
  console.log(categoryData)
  return (
    <>
    
    <ProductDetailComponent categoryData = {categoryData} id ={pid}/>
    </>
  )
  // return <p>Post: {pid}</p>
}

export default Post