import { TbShoppingBagSearch , TbSearch, TbShoppingCart} from "react-icons/tb";
import { useStore } from '../../store/store';
import "./Header.css";
import { Link } from 'react-router-dom'

const  Header = () => {

    const { products } = useStore();
    
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">
                    <h2>Purri Shop</h2>
                    <TbShoppingBagSearch className="icon"/>
                </div>
            </Link>
            <div className="right-side">

                <Link to="/cart">
                    <div className="cart">
                        <TbShoppingCart className="cart-icon" />
                        <span>{products? products.length : '0'}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header