import { CartItem } from '../redux/cart/types';
import { calcTotalPrise } from './calcTotalPrice';

export const getCartFormLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrise(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};
