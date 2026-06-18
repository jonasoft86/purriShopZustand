import { createContext, useContext } from "react"
import { useParams } from "react-router-dom"
import { featuredProducts } from "../data/products"

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const {category} = useParams();
  const normalizedCategory = category?.toLowerCase();
  const filteredProducts = normalizedCategory
    ? featuredProducts.filter((product) =>
        product.category?.toLowerCase().includes(normalizedCategory)
      )
    : featuredProducts;
  const products = filteredProducts.length ? filteredProducts : featuredProducts;

  return (
    <ProductContext.Provider value={{ products, loading: false }}>{children}</ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)

