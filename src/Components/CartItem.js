import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };

  return (
    <li className="CartItem__item">
      <img src={item.image} alt="" />
      <div>
        {item.name} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className="cartItem__button" onClick={() => removeItem(item._id)}>
        remove
      </button>
    </li>
  );
};
export default CartItem;
