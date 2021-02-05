import React, { useState } from 'react';
//MUI
import { makeStyles } from '@material-ui/core/styles';
//helpers
import { attemptLogin } from './api';

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
  //state
  const initStatus = {
      credentials:{username:'', password:''},
      attemptingLogin:false,
  }
  const [status, setStatus] = useState(initStatus);
  //destructuring
  const { username, password } = status.credentials;
  const handleChange = (e) => {
    const { name, value } = e.target;
     setStatus(status => ({...status, credentials:{...status.credentials, [name]: value } }));
  }
  const handleSubmit = async (e) => {
      e.preventDefault();
      if (username && password) {
          setStatus(status => ({...status, attemptingLogin:true}))
          //api call
          const data = await attemptLogin(status.credentials);
          console.log('data', data)
          if(data.error){
            console.log('failure', data)
          }
          else{
            console.log('success', data)
          }
      }else{
        alert('Please provide a username and password.')
      }
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