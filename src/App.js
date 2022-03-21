import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { HomePage, Register, Login} from './pages';
// import PrivateRoute from './PrivateRoute';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <PrivateRoute path="/..." component={...} /> */}

        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
