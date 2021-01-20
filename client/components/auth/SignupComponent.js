import React, { useState } from 'react';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: 'Alper',
    email: 'alper@gmail.com',
    password: 'qwerty',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password, error, loading, message, showForm });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: false, [name]: e.target.value });
  };

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

  return <React.Fragment>{signupForm()}</React.Fragment>;
};

export default SignupComponent;
