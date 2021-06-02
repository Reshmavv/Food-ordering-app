

import {orderActions} from './order-slice';
import {orderListActions} from './orderlist-slice';
import {useSelector} from 'react-redux';
import classes from '../components/Meals/AvailableMeals.module.css';



export const ShowOrders = () => {
  return async (dispatch) => {
    const fetchOrder = async () => {
      const response = await fetch(
        'https://food-ordering-app-700fa-default-rtdb.firebaseio.com/orders.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
      //console.log(data);
    };

    try {
      const orderData = await fetchOrder();
console.log(orderData);
    //  for(const key in orderData ){
    //   dispatch(
    //     orderListActions.showOrderList({
    //       id:orderData[key],
    //      name:orderData[key].user.name,
        
    //      city:orderData[key].user.city,
    //      postalcode:orderData[key].user.postalCode,
    //      street:orderData.user[key].street,
    //     })
    //   );
    //  }
    dispatch(orderListActions.showOrderList(orderData));
     
    } catch (error) {
      // dispatch(
      //   uiActions.showNotification({
      //     status: 'error',
      //     title: 'Error!',
      //     message: 'Fetching cart data failed!',
      //   })
      // );
    }
  };
};


// export const ShowOrders=()=>{
//     const loading= useSelector((state)=>state.order.isOrderLoading);
//     const httperror=useSelector((state)=>state.order.httpError);
//     const initial=useSelector((state)=>state.order.Initial);

//     return async(dispatch)=>{
//         const fetchOrders=async()=>{
//             const response = await fetch('https://food-ordering-app-700fa-default-rtdb.firebaseio.com/orders.json');

//             if (!response.ok) {
//                throw new Error('Something went wrong!');
//              }
       
//              const responseData = await response.json();
       
//              const loadedOrder = [];
       
//              for (const key in responseData) {
//                loadedOrder.push({
//                  id: key,
//                  name: responseData[key].user.name,
//                  city: responseData[key].user.city,
//                  pin: responseData[key].user.postalCode,
//                  pname:responseData[key].orderedItem[0].name,
//                  price:responseData[key].orderedItem[0].price,
//                });
//                console.log(loadedOrder);
//                console.log( responseData[key].user.postalCode);
//              }
//        console.log(loadedOrder);
//              dispatch(orderActions.showOrders(loadedOrder));//setMeals(loadedMeals);
//              dispatch(orderActions.setIsOrderLoading());//setIsLoading(false);
//            };
//            fetchOrders().catch((error) => {
//             dispatch(orderActions.setIsOrderLoading());// setIsLoading(false);
//             dispatch(orderActions.setHttpError(error.message));//setHttpError(error.message);
//           });
        
      
//         if (loading) {
//           return (
//             <section className={classes.MealsLoading}>
//               <p>Loading...</p>
//             </section>
//           );
//         }
      
//         if (httperror) {
//           return (
//             <section className={classes.MealsError}>
//               <p>{httperror}</p>
//             </section>
//           );
//         }
       
//         };
//     };


