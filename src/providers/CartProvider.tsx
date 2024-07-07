
import {PropsWithChildren,createContext, useContext,useEffect,useState,} from 'react';
import { CartItem, Product } from "@/types";
import { randomUUID } from 'expo-crypto';

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem['size']) => void;
  updateQuantity: (itemId: string, amount: 1 | -1) => void;
  // total: number;
};



const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  // total: 0,
});




 const CartProvider =({ children }:PropsWithChildren)=> {
  const [items, setItems] = useState<CartItem[]>([]);



  
  const addItem = (product: Product, size: CartItem['size']) => {
    const existingItem = items.find(
      (item) => item.product.id === product.id && item.size === size
    );
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }
    const newCartItem :CartItem = {
      id: randomUUID(),
      product,
      size,
      quantity: 1,
      product_id: product.id,
    };

    setItems([newCartItem, ...items]);
  };

  const updateQuantity = (itemId: string, amount: 1 | -1) => {
    setItems((existingItems) =>
      existingItems
        .map((it) =>
          it.id === itemId ? { ...it, quantity: it.quantity + amount } : it
        )
        .filter((item) => item.quantity > 0)
    );
  };




    return (
      <CartContext.Provider value={{ items , addItem,updateQuantity }}>
        {children}
      </CartContext.Provider>
    );
  }


  export default CartProvider;
  export const useCart =()=>useContext(CartContext)