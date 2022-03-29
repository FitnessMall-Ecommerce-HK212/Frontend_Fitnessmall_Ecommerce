import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import  {Login,Register,HomePage} from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './pages/AllProducts';

// import PrivateRoute from './PrivateRoute';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/products" component={AllProducts} />
          {/* <PrivateRoute path="/..." component={...} /> */}

        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
