import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, Redirect } from 'react-router-dom';
import '../styles/Register.css';

// import { loginUser } from '../redux/auth/authSlice';

const Login = () => {
  //Mấy cái cmt này là dự án cũ á, ông nào làm login có thể tham khảo :v
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const { isAuthenticated } = useSelector((state) => state.auth);

  // const fakeLogin = () => {
  //   localStorage.setItem('token_CNPM', 'token')
  //   history.push('/')
  // }

  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });

  // const { email, password } = formData;

  // const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(loginUser({ email, password }));
  // };

  // if (isAuthenticated) {
  //   return <Redirect to="/" />;
  // }
  return (
    <>
      {/* <div id="register_bg"></div>
      <div id="register">
        <figure>
          <Link href="/">
            <img src={logo} width="50" height="50" alt="" />
          </Link>
        </figure>
        <div class="divider">
          <span></span>
        </div>
        <form autocomplete="off" onSubmit={handleSubmit}>
          <div class="form-group">
            <input class="form-control" type="email" placeholder="Email" name="email" onChange={onChange} />
            <i class="icon_mail_alt"></i>
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="password"
              id="password1"
              placeholder="Password"
              name="password"
              onChange={onChange}
            />
            <i class="icon_lock_alt"></i>
          </div>
          <button type="submit" class="btn_register">
            Log in
          </button>
          <div class="mt-2">
            <small>
              Don’t have an account?{' '}
              <strong>
                <Link to="/register">Sign Up</Link>
              </strong>
            </small>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default Login;
