import "./Productcard.css";
import formatCurrency from "format-currency";
import Rating from "./Rating";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.name}</h4>
        <div className="ProductCard__price">
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <div className="ProductCard__Rating">
          <Rating value={product.rating} text={`${product.numReviews}`} />
        </div>
        <div className="ProductCard__button" onClick={() => addToCart(product)}>
          Thêm vào vỏ hàng
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
