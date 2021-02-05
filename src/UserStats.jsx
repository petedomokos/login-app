import React, { useState } from 'react';
import PropTypes from 'prop-types';
//MUI
import { makeStyles } from '@material-ui/core/styles';
import StatsBody from "./StatsBody";
import StatsResults from "./StatsResults";

//pass in site theme here
const useStyles = makeStyles(theme => ({

}));

export function UserStats(props) {
  const classes = useStyles();

  const [ route, setRoute ] = useState("form");
  const [ body, setBody ] = useState("body");

  return (
      <>
          <header className="header">
            Login metrics
          </header>
          {route === "form"
            ? (<StatsBody switchRoute={body => {
              setRoute("results");
              setBody(body);
            }} />)
            : (<StatsResults body={body} />)
          }
      </>
    );
}

UserStats.propTypes = {
  user:PropTypes.string
}
