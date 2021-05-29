
import {useDispatch,useSelector} from 'react-redux';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

import {uiActions} from './store/ui-slice';


function App() {
  const dispatch=useDispatch();
 const showCart= useSelector(state=>state.ui.cartIsShown);
 // const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    dispatch(uiActions.setCartIsShown());//setCartIsShown(true);
  };

  const hideCartHandler = () => {
    dispatch(uiActions.setCartIsShown());
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
     {!showCart &&<Header onShowCart={showCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
