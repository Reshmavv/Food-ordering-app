import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {useDispatch,useSelector} from 'react-redux';
import classes from './OrderModal.module.css';
import {orderModalActions} from '../../store/orderModalSlice';
import orderModalSlice from '../../store/orderModalSlice';
import orderModalItem from './orderModalItem';
import {orderListActions} from '../../store/orderlist-slice';
import orderListSlice from '../../store/orderlist-slice'

const Backdrop = (props) => {
const dispatch=useDispatch();
const close=useSelector((state)=>state.ordermodal.closeModal);


let showModalHandler=props.onClose;
 showModalHandler=()=>{
dispatch(orderModalActions.setCloseModal());
dispatch(orderModalActions.setShowModal());

}

  return <div className={classes.backdrop} onClick={showModalHandler}/>;
};

export const ModalOverlay = (props) => {
  
   const orderData=useSelector((state)=>state.orderlist.orders);
  const orderList=[];
  const orderedItem=[];
  let i;
  
  for (const key in orderData){
    
      orderList.push({
        id: key,
      
        name: orderData[key].user.name,
        city: orderData[key].user.city,
        pin: orderData[key].user.postalCode,
        street:orderData[key].user.street,
        orderedItem:orderData[key].orderedItems,
 
      });
    
    }
  console.log(orderList);
                                     

const loadedOrders=orderList.map((order)=>(
<div>
  <div className={classes.content}>

<ul className={classes['cart-items']}>
<li key={order.id} className={classes['cart-item']}>
      <div>
      <div>
        <h2>{order.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{order.city},</span>
          <span className={classes.price}>{order.street},</span>
          <span className={classes.price}>{order.pin}</span>
        </div>
      </div>
    </div>
   <ul className={classes['cart-items']}>
     
    { order.orderedItem.map((items)=>(
      <li key={items.id} className={classes['cart-item']}>
      <div>
        <div>
          
        
      <h3>Item:{items.name}</h3>
      
      <div className={classes.summary}>
      <span className={classes.price}>Price:{items.price}</span>
      </div>
      <div className={classes.summary}>
      <span className={classes.price}>Amount:{items.amount}</span>
      </div>
      </div>
      
      </div>
          
      </li>
    ))}
   </ul>
    </li>
   
  </ul>


</div>
</div>

))
 //console.log(orders);




  return (
 
    <div className={classes.modal}>
      <div className={classes['modal-scroll']}>
    {loadedOrders}
 </div>
  </div>
  
  
 
    
  );
};

const portalElement = document.getElementById('overlays');

const OrderModal = (props) => {
  return (
    
    <Fragment>
       
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      
    </Fragment>
  );
};

export default OrderModal;
