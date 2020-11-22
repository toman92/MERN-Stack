import React from 'react';
import PropTypes from 'prop-types';
import { Divider, TextField } from '@material-ui/core';

const HomeAboutMe = (props) => {
  return (
    <>
      <p>This is the about me on the home page. My name is {props.name}</p>
      <Divider />
      <TextField
        placeholder='Enter here to change name'
        onChange={props.changeName}
      />
    </>
  );
};

HomeAboutMe.propTypes = {
  name: PropTypes.object.isRequired,
  changeName: PropTypes.func.isRequired,
};

export default HomeAboutMe;
