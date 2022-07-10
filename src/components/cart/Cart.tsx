import { useAppDispatch, useAppSelector } from "../../hooks";
import { addToCart, decreaseCart, removeItem } from "../../features/cartSlice";
// styled components
import { FlexContainer, StyledTable } from "./styledCart";

const Cart = () => {
  const { cart, cartTotalAmount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div style={{paddingTop: "90px"}}>
      <StyledTable>
        <thead>
          <tr>
            <td>Product</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.id}>
              <td>
                <h6>{cartItem.title}</h6>
                <img src={cartItem.image} alt={cartItem.title} />
                <p onClick={() => dispatch(removeItem(cartItem))}>Remove</p>
              </td>
              <td>
                <FlexContainer>
                  <button onClick={() => dispatch(addToCart(cartItem))}>
                    +
                  </button>
                  <span>{cartItem.amount}</span>
                  <button onClick={() => dispatch(decreaseCart(cartItem))}>
                    -
                  </button>
                </FlexContainer>
              </td>
              <td>
                <span>${cartItem.price}</span>
              </td>
              <td>${(cartItem.amount * cartItem.price).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: "right", fontWeight: "bold" }} colSpan={4}>
              Subtotal: ${cartTotalAmount.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Cart;
