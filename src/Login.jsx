import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    margin:'10px',
    color:'red'
  }
}));

export default function Login(props) {
  const classes = useStyles();
  //state
  const [credentials, setCredentials] = useState({username:'', password:''});
  const [attemptingLogin, setAttemptingLogin] = useState(false);
  const [error, setError] = useState('');
  const [nrOfAttempts, setNrOfAttempts] = useState(0);
  const [userJwt, setUserJwt] = useState(null);
  //destructuring
  const { username, password } = credentials;
  //user input
  const handleChange = (e) => {
      const { name, value } = e.target;
      setCredentials(credentials => ({...credentials,  [name]: value }));
      //remove previous error mesg as user has started correcting
      setError('');
  }
  //user submit
  const handleSubmit = async (e) => {
      e.preventDefault();
      if (username && password) {
          setAttemptingLogin(true);
          setNrOfAttempts(nrOfAttempts => nrOfAttempts + 1)
          //api call
          const data = await attemptLogin(credentials);
          setAttemptingLogin(false);
          if(data.error){
            //add error and reset password
            setError(data.error);
            setCredentials(credentials => ({...credentials,  password:''}));
          }
          else{
            //reset any previous error
            setError('');
            //if no error, then data will contain a JWT token (assumed back-end implemtation)
            //store user jwt token in session storage 
            //note alternative options: (a) could use redux store but no need,
            // or (b) could use Route to get to Home instead, and pass user to Home as props -but only if
            //this component was to be integrated with app, rather than standalone login
            sessionStorage.setItem('jwt', JSON.stringify(data.jwt));
            //update token in component state to trigger re-render and hence Redirect
            setUserJwt(data.jwt);
          }
      }else{
        alert('Please provide a username and password.');
      }
  }

  if(userJwt){
      //user is authenticated
      //if integrated with app, then redirect to Home page or referrer (defaults to '/')
      //if standalone, then consider options -> server can store jwt token so it is accessible from other apps (ie for single sign-on)
      //home page, and other pages, can access token via session storage
      //temp mock home page in place of external link
      return(<MockHome/>)
      //for integrated app
      //return(<Redirect to={referrerUrl})
  }
  return (
      <div className={classes.root}>
          <h2>Login</h2>
          <form name="form" onSubmit={handleSubmit}>
              <div className={classes.formElement}>
                  <label className={classes.label} htmlFor="username">Username</label>
                  <input className={classes.input} id="username" type="text" name="username" value={username} onChange={handleChange} />
              </div>
              <div className={classes.formElement}>
                  <label className={classes.label} htmlFor="password">Password</label>
                  <input className={classes.input} id="password" type="password" name="password" value={password} onChange={handleChange} />
              </div>
              <div className={classes.submit}>
                  <button>
                      Login
                  </button>
              </div>
              {attemptingLogin && <div className={classes.error}>Attempting login...</div>}
              {error && <div className={classes.error}>{error}</div>}
          </form>
      </div>
    );
}

Login.propTypes = {
  referrerUrl:PropTypes.string
}
Login.defaultProps = {
  referrerUrl:'/'
}

const MockHome = () => {
  return (
    <div>Home page</div>
    )
}

