import React from 'react';
import classes from './orderModalItem.module.css';
import {ModalOverlay} from './OrderModal';
import OrderModal from './OrderModal';

const orderModalItem=(props)=>{

return(
  
      <React.Fragment>
    <div>
        <ul>
        <li className={classes['cart-item']}>
      <div>
        <h2>Name</h2>
        <div className={classes.summary}>
          <span className={classes.price}></span>
          <span className={classes.amount}></span>
        </div>
      </div>
      <div className={classes.actions}>
        
      </div>
    </li>
        </ul>
    </div>
    </React.Fragment>
   
);

};

export default orderModalItem;
