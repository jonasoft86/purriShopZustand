import { TbHeart, TbShoppingCart } from 'react-icons/tb'
import './ProductCart.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useStore } from '../../store/store';

const ProductCart = ({product}) => {

    const addProduct = useStore((state) => state.addProduct);

    return (
        <motion.article
            className='card-container'
            initial={{ opacity:0 , y:24 }}
            animate={{ opacity:1 , y:0 }}
            transition={{ duration:0.45 }}
        >
            <span className="product-badge">{product.id % 2 === 0 ? 'Oferta' : 'Nuevo'}</span>
            <button className="favorite-button" aria-label="Añadir a favoritos"><TbHeart /></button>
            <div className='card-image'>
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.title} />
                </Link>
            </div>
            <div className='card-detail'>
                <Link to={`/product/${product.id}`}>
                    <h4 className='card-title'>{product.title}</h4>
                    <div className='card-category'>{product.category}</div>
                </Link>
                <div className="card-flex">
                    <div className="card-price">${product.price.toFixed(2)}</div>
                    <button className="card-button" onClick={() => addProduct(product)} aria-label={`Añadir ${product.title} al carrito`}>
                        <TbShoppingCart />
                    </button>
                </div>
            </div>
        </motion.article>
    )
}

export default ProductCart
