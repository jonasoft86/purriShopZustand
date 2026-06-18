import { TbArrowRight, TbShoppingBag, TbShoppingCart } from 'react-icons/tb'
import './Hero.css'

const Hero = () => (
  <section className="hero">
    <div className="hero-copy">
      <span className="eyebrow">Bienvenido a MiniShop</span>
      <h1>Descubre productos increíbles <TbShoppingBag /></h1>
      <p>Calidad, estilo y los mejores precios en un solo lugar. ¡Encuentra lo que buscas!</p>
      <a className="primary-button" href="#productos">
        Comprar ahora <TbArrowRight />
      </a>
    </div>

    <div className="hero-art" aria-hidden="true">
      <div className="decor-circle circle-one" />
      <div className="decor-circle circle-two" />
      <div className="dot-grid">
        {Array.from({ length: 16 }).map((_, index) => <i key={index} />)}
      </div>
      <div className="cart-illustration">
        <div className="hero-bag bag-one"><TbShoppingBag /></div>
        <div className="hero-bag bag-two"><TbShoppingBag /></div>
        <TbShoppingCart className="hero-cart-icon" />
      </div>
    </div>
  </section>
)

export default Hero
