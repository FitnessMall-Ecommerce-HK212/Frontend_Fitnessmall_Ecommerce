import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';

import  {Login,Register,HomePage,Account} from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './pages/AllProducts';
import PurchasedItemsList from './features/cart/PurchasedItemsList';
import OrdersList from './features/orders/OrdersList';

import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import SingleOrderPage from './features/orders/SingleOrderPage';
import SingleShipmentPage from './features/shipment/SingleShipmentPage';
import Confirm from './features/cart/Confirm';
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
          <Route exact path="/blog" component={BlogPage} />
          <Route path="/blog/detail/1" component={BlogDetailPage} />
          {/* <PrivateRoute path="/..." component={...} /> */}
          <Route exact path="/cart" component={PurchasedItemsList} />
          <Route exact path="/cart/confirm" component={Confirm} />
          <Route exact path="/history/order" component={OrdersList} />
          <Route exact path="/history/order/:orderId" component={SingleOrderPage} />
          <Route exact path="/history/order/:orderId/:shipmentId" component={SingleShipmentPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
