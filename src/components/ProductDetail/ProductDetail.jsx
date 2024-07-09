//import { useCart } from "../../context/CardContext";
import useGetProduct from "../../hooks/useGetProduct";
import { motion } from 'framer-motion'
import "./ProductDetail.css"

const ProductDetail = () => {
  const { product } = useGetProduct()
  //const { addToCart , loading } = useCart();

  const handleAdd = (product) =>{
    
  }

  return (
    <motion.div 
      className='product-container'
      initial={{ opacity:0 , y:100 }}
      animate={{ opacity:1 , y:0 }}
      transition={{ delay: 0.15, duration:2 }}
    >
      <div className='product-image'>
        {
          loading? (
            <div className="product-image-skeleton"></div>
          ): (
            <img src={product.image} alt={product.title} />
          )
        }
      </div>
      <div className='product-detail'>
        {
          loading? 
          <>
            <div className="product-detail-skeleton">
              <div className="product-skeleton"></div>
              <div className="product-skeleton"></div>
              <div className="product-skeleton"></div>
              <div className="product-skeleton"></div>
              <div className="product-skeleton"></div>
              <div className="product-skeleton"></div>
            </div>
          </>
          : 
          <>
            <div className='product-category'>{product.category}</div>
            <h1 className='product-title'>{product.title}</h1>
            <div className='product-rating'>
              <div className='product-rating-star'>⭐</div>
              <span>{product.rating?.rate}</span>
              <span>{product.rating?.count}</span>
              reviews
            </div>
            <div className="product-description">{product.description}</div>
            <div className="product-price">${product.price}</div>

            <div className='product-buttons'>
              <div className='product-btn' onClick={()=>handleAdd(product)}>Add to Cart</div>
              <div className='product-btn buy-btn'>Buy Now</div>
            </div>
          </>
        }
      </div>
    </motion.div>
  )
}

export default ProductDetail