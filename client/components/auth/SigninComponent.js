import React, { useState } from 'react';
import Router from 'next/router';

import { signin, authenticate } from '../../actions/auth';

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: 'alper@gmail.com',
    password: 'qwerty',
    error: '',
    loading: false,
    showForm: true,
  });

  const { email, password, error, loading, showForm } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({ ...values, error: false, loading: true });
    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          Router.push('/');
        });
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: false, [name]: value });
  };

  const showLoading = () =>
    loading ? <div className='alert alert-info'>Loading...</div> : '';

  const showError = () =>
    error ? <div className='alert alert-danger'>{error}</div> : '';

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            type='email'
            placeholder='Type your email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='password'
            placeholder='Type your password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-primary'>Signin</button>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showForm && signinForm()}
    </React.Fragment>
  );
};

export default SigninComponent;
