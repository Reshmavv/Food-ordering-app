import React,{useContext} from 'react';
import {useSelector,useDispatch } from 'react-redux';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import cartSlice from '../../store/cart-slice';
import {cartActions} from '../../store/cart-slice';

const Cart = (props) => {
  //const [isCheckout, setIsCheckout] = useState(false);
  //const [isSubmitting, setIsSubmitting] = useState(false);
 // const [didSubmit, setDidSubmit] = useState(false);
   const cartCtx = useContext(CartContext);

   const dispatch=useDispatch();

  const checkout=useSelector((state)=>state.cart.isCheckout);
  const submitting=useSelector((state)=>state.cart.isSubmitting);
  const didSubmit=useSelector((state)=>state.cart.didSubmit);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    dispatch(cartActions.setIsCheckout());
   // setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    dispatch(cartActions.setIsSubmitting());
    await fetch('https://food-ordering-app-700fa-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    dispatch(cartActions.setIsSubmitting());//setIsSubmitting(false);
    dispatch(cartActions.setDidSubmit());//setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!checkout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!submitting && !didSubmit && cartModalContent}
      {submitting && isSubmittingModalContent}
      {!submitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
