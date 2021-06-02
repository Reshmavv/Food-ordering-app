import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
import OrdersButton from './OrdersButton';
import {ShowOrders} from '../../store/order-actions';
import {useDispatch,useSelector} from 'react-redux';
import {orderActions} from '../../store/order-slice';
import orderSlice from '../../store/order-slice';

import {orderListActions} from '../../store/orderlist-slice';
import orderListSlice from '../../store/orderlist-slice';
import OrderModal from '../UI/OrderModal';
import {orderModalActions} from '../../store/orderModalSlice';
import orderModalSlice from '../../store/orderModalSlice';

const HeaderCartButton = (props) => {
  const dispatch=useDispatch();
  const initial=useSelector((state)=>state.order.Initial);
  //const orderData=useSelector((state)=>state.order.orders);

  const orderlist=useSelector((state)=>state.orderlist.orders);
  const showmodal=useSelector((state)=>state.ordermodal.showModal);
  const closemodal=useSelector((state)=>state.ordermodal.closeModal);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const [meals, setMeals] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [httpError, setHttpError] = useState();

let isInitial=true;


  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  



//showing previous orders


let id;

const showOrderHandler=()=>{


  dispatch(orderModalActions.setShowModal());
  dispatch(orderModalActions.setCloseModal());
  //console.log(orderlist);

  // const key=orderlist.map((data)=>(
 
  // ));
  

  // for (const key in orderData){
  //   orderList.push({
  //                      id: key,
  //                      name: orderData[key].user.name,
  //                      city: orderData[key].user.city,
  //                      pin: orderData[key].user.postalCode,
  //                      orderedItem:orderData[key].orderedItems.map((data)=>{
  //                       amount=data.amount;
  //                       itemname=data.name;
  //                       price=data.price;
  //                      }
                    
                       

  //                       ),
                          
                        
  //                     // pname:orderData[key].orderedItem[0].name,
  //                     // price:orderData[key].orderedItem[0].price,
  //                    });
                  
  //                    console.log(orderList);
  //                    console.log(orderlist[id]);
                     
                     
  // }
 
  // dispatch(orderActions.orderList({name:orderList.name}));
  
 //dispatch(orderActions.setInitial());
};
useEffect(()=>{
 
  dispatch(ShowOrders());
},[dispatch]);


  return (
    <div>
      <ul className={classes['btn-list']}>
      
        <li className={classes['btn-list-order']}>
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button></li>
    
    <li className={classes['btn-list-order']}>
    
    <button className={classes['button-order']} onClick={showOrderHandler} >
    
      <span >Show Orders</span>
    
    </button></li>
    


   </ul>
  
   {showmodal && !closemodal && <OrderModal/>}
   </div>
   
   
  );
};

export default HeaderCartButton;
