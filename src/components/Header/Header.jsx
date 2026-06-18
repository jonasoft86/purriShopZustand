import { TbMenu2, TbSearch, TbShoppingBag, TbShoppingCart } from "react-icons/tb";
import { useStore } from '../../store/store';
import "./Header.css";
import { Link, NavLink } from 'react-router-dom'

const  Header = () => {
    const products = useStore((state) => state.products);
    const totalItems = products.reduce((total, product) => total + product.qty, 0);
    
    return (
        <header className="header">
            <Link to="/" className="logo" aria-label="Ir al inicio">
                <span className="logo-mark"><TbShoppingBag /></span>
                <span><strong>Mini</strong>Shop</span>
            </Link>

            <nav className="main-nav" aria-label="Navegación principal">
                <NavLink to="/">Inicio</NavLink>
                <a href="/#productos">Productos</a>
            </nav>

            <div className="header-actions">
                <button className="icon-button search-button" aria-label="Buscar">
                    <TbSearch />
                </button>
                <Link to="/cart" className="icon-button cart" aria-label={`Carrito con ${totalItems} productos`}>
                    <TbShoppingCart />
                    {totalItems > 0 && <span>{totalItems}</span>}
                </Link>
                <button className="icon-button menu-button" aria-label="Abrir menú">
                    <TbMenu2 />
                </button>
            </div>
        </header>
    )
}

export default Header
