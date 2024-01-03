import SearchAddComponent from '@/components/ui/dashboard/Remaining_Fields/SearchAdd'
import Pagination from '@/components/ui/dashboard/Remaining_Fields/Pagination'
import ProductTable from '@/components/ui/dashboard/Remaining_Fields/ProductTable'
import { fetchProduct } from '@/utills/dataFETCH'


async function Product({searchParams}) {
  //SEARCH DATA ACTIVATIONS
  const q = searchParams?.q ||""
  const page = searchParams?.page || 1
  const {products,count} = await fetchProduct(q, page)
 
  
  return (
    <section className=" bg-[#0c162c] w-full">
        <SearchAddComponent title="Product" url="/dashboard/products/product_form"/>
        <ProductTable Datas={JSON.parse(JSON.stringify(products))} />
        <Pagination count={count} />
    </section>
  )
}

export default Product