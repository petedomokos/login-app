import React, { useState } from 'react';
//MUI
import { makeStyles } from '@material-ui/core/styles';

//pass in site theme here
const useStyles = makeStyles(theme => ({
  root: {
    margin:'20px'
  },
  formElement:{
    margin:'10px'
  },
  label:{
    display: 'block'
  },
  input:{
  },
  submit:{
    margin:'10px'
  },
  error:{
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const username = '';
  const password = '';
  function handleChange(e) {

  }
  const handleSubmit = (e) => {
  }

  return (
      <div className={classes.root}>
          <h2>Login</h2>
          <form name="form" onSubmit={handleSubmit}>
              <div className={classes.formElement}>
                  <label className={classes.label}>Username</label>
                  <input className={classes.input} type="text" name="username" value={username} onChange={handleChange} />
              </div>
              <div className={classes.formElement}>
                  <label className={classes.label}>Password</label>
                  <input className={classes.input} type="password" name="password" value={password} onChange={handleChange} />
              </div>
              <div className={classes.submit}>
                  <button>
                      Login
                  </button>
              </div>

          </form>
      </div>
    );
}

Login.propTypes = {
}
Login.defaultProps = {
}