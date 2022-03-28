import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import  {Login,Register,HomePage} from './pages';
import PurchasedItemsList from './features/cart/PurchasedItemsList';
// import PrivateRoute from './PrivateRoute';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* <PrivateRoute path="/..." component={...} /> */}
          <Route exact path="/cart" component={PurchasedItemsList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
