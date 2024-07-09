import { useProduct } from "../../context/ProductContext"
import ProductCart from "../ProductCart/ProductCart"
import Skeleton from "../Skeleton/Skeleton"
import './ProductList.css'

const ProductList = () => {
  const { products, loading } = useProduct();
  return (
    <div className='product-list'>
      {
        loading ? (
          Array.from({length:4}).map((_,index) => (
            <div key={index} className="skeleton-cointainer">
              <Skeleton />
            </div>
          )))
        :
        <>
          { products.map((product)=> (
              <ProductCart key={product.id} product={product} />
          ))}
        </>
      }   
    </div>
  )
}

export default ProductList