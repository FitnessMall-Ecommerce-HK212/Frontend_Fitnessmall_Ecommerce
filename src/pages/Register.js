import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
// import logo from '../assets/img/logo.png';
import '../styles/Register.css';

// import { registerUser } from '../redux/auth/authSlice';

const Register = () => {
  // const dispatch = useDispatch();
  // const { isAuthenticated } = useSelector((state) => state.auth);

  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // });

  // const { firstName, lastName, email, password } = formData;

  // const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = () => {
  //   dispatch(registerUser({ firstName, lastName, email, password }));
  // };

  // if (isAuthenticated) {
  //   return <Redirect to="/" />;
  // }
  return (
    <>
      {/* <div id="register_bg"></div>
      <div id="register">
        <figure>
          <Link to="/">
            <img src={logo} width="50" height="50" alt="" />
          </Link>
        </figure>
        <div class="divider">
          <span></span>
        </div>
        <form autocomplete="off">
          <div class="form-group">
            <input class="form-control" type="text" name="firstName" placeholder="First Name" onChange={onChange} />
            <i class="icon_pencil-edit"></i>
          </div>
          <div class="form-group">
            <input class="form-control" type="text" name="lastName" placeholder="Last Name" onChange={onChange} />
            <i class="icon_pencil-edit"></i>
          </div>
          <div class="form-group">
            <input class="form-control" type="email" name="email" placeholder="Email" onChange={onChange} />
            <i class="icon_mail_alt"></i>
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="password"
              name="password"
              id="password1"
              placeholder="Password"
              onChange={onChange}
            />
            <i class="icon_lock_alt"></i>
          </div>
          <button type="button" class="btn_register" onClick={handleSubmit}>
            Register Now!
          </button>
          <div class="mt-2">
            <small>
              Already have an acccount?{' '}
              <strong>
                <Link to="/login">Sign In</Link>
              </strong>
            </small>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default Register;
