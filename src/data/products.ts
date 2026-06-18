import headphones from '../assets/products/headphones.svg';
import watch from '../assets/products/watch.svg';
import shoes from '../assets/products/shoes.svg';
import backpack from '../assets/products/backpack.svg';
import { Product } from '../types/product';

export const featuredProducts: Product[] = [
  {
    id: 1,
    title: 'Audífonos Bluetooth',
    price: 45.99,
    description: 'Sonido premium, diseño cómodo y conexión estable para acompañarte todo el día.',
    category: 'Sonido premium',
    image: headphones,
    rating: { rate: 4.8, count: 124 },
  },
  {
    id: 2,
    title: 'Smartwatch Pro',
    price: 89.99,
    description: 'Pantalla AMOLED, seguimiento deportivo y notificaciones en tu muñeca.',
    category: 'Pantalla AMOLED',
    image: watch,
    rating: { rate: 4.7, count: 89 },
  },
  {
    id: 3,
    title: 'Zapatillas Urbanas',
    price: 59.99,
    description: 'Comodidad ligera y un estilo versátil diseñado para el ritmo de la ciudad.',
    category: 'Estilo y comodidad',
    image: shoes,
    rating: { rate: 4.6, count: 76 },
  },
  {
    id: 4,
    title: 'Mochila Premium',
    price: 39.99,
    description: 'Resistente, moderna y con espacio organizado para todos tus esenciales.',
    category: 'Resistente y moderna',
    image: backpack,
    rating: { rate: 4.9, count: 101 },
  },
];
