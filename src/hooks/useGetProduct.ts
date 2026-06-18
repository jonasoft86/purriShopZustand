import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Product } from '../types/product';
import { featuredProducts } from '../data/products';

const useGetProduct = () => {

    const [product, setProduct] = useState<Partial<Product>>({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(()=>{
      const getProduct = async() => {
        const foundProduct = featuredProducts.find(
          (item) => String(item.id) === id
        )

        setProduct(foundProduct ?? {})
        setLoading(false)
      };

      getProduct()
    }, [id])

    return { product, loading}
};

export default useGetProduct
