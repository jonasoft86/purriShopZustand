import { motion } from 'framer-motion'
import { TbArrowLeft, TbShoppingCart } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import useGetProduct from "../../hooks/useGetProduct"
import { useStore } from '../../store/store'
import "./ProductDetail.css"

const ProductDetail = () => {
  const { product, loading } = useGetProduct()
  const addProduct = useStore((state) => state.addProduct)

  return (
    <motion.div 
      className='product-container'
      initial={{ opacity:0 , y:24 }}
      animate={{ opacity:1 , y:0 }}
      transition={{ duration:0.45 }}
    >
      <Link to="/" className="detail-back"><TbArrowLeft /> Volver</Link>
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
            <div className="product-price">${product.price?.toFixed(2)}</div>

            <div className='product-buttons'>
              <button className='product-btn' onClick={()=>addProduct(product)}>
                <TbShoppingCart /> Añadir al carrito
              </button>
              <button className='product-btn buy-btn'>Comprar ahora</button>
            </div>
          </>
        }
      </div>
    </motion.div>
  )
}

export default ProductDetail
