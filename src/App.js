import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import  {Login,Register,HomePage,Account} from './pages';
import PurchasedItemsList from './features/cart/PurchasedItemsList';
import OrdersList from './features/orders/OrdersList';
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
          {/* <PrivateRoute path="/..." component={...} /> */}
          <Route exact path="/cart" component={PurchasedItemsList} />
          <Route exact path="/history/order" component={OrdersList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
