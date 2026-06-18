import ProductList from "../components/ProductList/ProductList"
import { ProductProvider } from "../context/ProductContext"
import CartContainer from "../components/Cart/CartContainer"
import Hero from "../components/Hero/Hero"
import { Link } from "react-router-dom"
import { TbAward, TbHeadphones, TbShieldCheck, TbTruckDelivery } from "react-icons/tb"
import "./Home.css"

const Home = () => {
  return (
    <ProductProvider>
      <main className="home-layout">
        <div className="storefront">
          <Hero />

          <section className="featured-products" id="productos">
            <div className="section-heading">
              <h2>Productos destacados</h2>
              <Link to="/">Ver todos</Link>
            </div>
              <ProductList />
          </section>

          <section className="benefits" id="contacto">
            <article>
              <span><TbTruckDelivery /></span>
              <div><strong>Envío rápido</strong><small>Recibe tu pedido en 24-48h</small></div>
            </article>
            <article>
              <span><TbShieldCheck /></span>
              <div><strong>Pago seguro</strong><small>Tus datos protegidos</small></div>
            </article>
            <article>
              <span><TbAward /></span>
              <div><strong>Garantía</strong><small>Productos 100% originales</small></div>
            </article>
            <article>
              <span><TbHeadphones /></span>
              <div><strong>Soporte 24/7</strong><small>Estamos para ayudarte</small></div>
            </article>
          </section>
        </div>

        <aside className="cart-column">
          <CartContainer compact />
        </aside>
      </main>
    </ProductProvider>
  )
}

export default Home
