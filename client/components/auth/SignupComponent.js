import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { signup, isAuth } from '../../actions/auth';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: 'Alper',
    email: 'alper@gmail.com',
    password: 'qwerty',
    message: '',
    error: '',
    loading: false,
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && Router.push('/');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({ ...values, error: false, loading: true });
    const user = { name, email, password };

    signup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          message: data.message,
          error: '',
          loading: false,
          showForm: false,
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

  const showMessage = () =>
    message ? <div className='alert alert-info'>{message}</div> : '';

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Type your name'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </div>
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
        <button className='btn btn-primary'>Signup</button>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signupForm()}
    </React.Fragment>
  );
};

export default SignupComponent;
