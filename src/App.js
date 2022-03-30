import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';

import  {Login,Register,HomePage,Account} from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './pages/AllProducts';
import PurchasedItemsList from './features/cart/PurchasedItemsList';
import OrdersList from './features/orders/OrdersList';
import SingleOrderPage from './features/orders/SingleOrderPage';
// import PrivateRoute from './PrivateRoute';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/account" component={Account} />
          <Route path="/products" component={AllProducts} />
          {/* <PrivateRoute path="/..." component={...} /> */}
          <Route exact path="/cart" component={PurchasedItemsList} />
          <Route exact path="/history/order" component={OrdersList} />
          <Route exact path="/history/order/:orderId" component={SingleOrderPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
