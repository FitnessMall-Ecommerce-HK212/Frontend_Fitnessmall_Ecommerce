import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import PrivateRoute from './PrivateRoute';
import { Login, Register, HomePage, Account, HealthInfo, Address, Fake, Real } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './pages/AllProducts';
import PurchasedItemsList from './features/cart/PurchasedItemsList';
import OrdersList from './features/orders/OrdersList';

import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import SingleOrderPage from './features/orders/SingleOrderPage';
import SingleShipmentPage from './features/shipment/SingleShipmentPage';
import Confirm from './features/cart/Confirm';
import ProductDetailPage from './pages/ProductDetailPage';
import PaymentDonePage from './pages/PaymentDonePage';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/account" component={Account} />
          <Route exact path="/products/:type" component={AllProducts} />
          <Route exact path="/products/:type/:code" component={ProductDetailPage} />
          <PrivateRoute path="/account" component={Account} />
          <PrivateRoute path="/healthinfo" component={HealthInfo} />
          <PrivateRoute path="/address" component={Address} />
          <Route exact path="/blog" component={BlogPage} />
          <Route path="/blog/detail/:idBlog" component={BlogDetailPage} />
          {/* <PrivateRoute path="/..." component={...} /> */}
          <PrivateRoute exact path="/cart" component={PurchasedItemsList} />
          <PrivateRoute exact path="/cart/confirm" component={Confirm} />
          <PrivateRoute exact path="/cart/confirm/payment" component={PaymentDonePage} />
          <PrivateRoute exact path="/history/order" component={OrdersList} />
          <PrivateRoute exact path="/history/order/:orderId" component={SingleOrderPage} />
          <PrivateRoute exact path="/history/order/:orderId/:shipmentId" component={SingleShipmentPage} />
          <Route exact path="/fake/:data" component={Fake} />
          <Route exact path="/real/:data" component={Real} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
