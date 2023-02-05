import { CartItem } from '../redux/cart/types';

export const calcTotalPrise = (items: CartItem[]) => {
  return items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
};
