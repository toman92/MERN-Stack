import React, { useState } from 'react';
import {
  Grid,
  Button,
  TextField,
  Divider,
  Typography,
} from '@material-ui/core';
import HomeAboutMe from './HomeAboutMe';

const Home = () => {
  const [timesClicked, setTimesClicked] = useState(0);
  const [myName, setMyName] = useState('Ciaran');

  // const [formData, setFormData] = useState({
  //   name: '',
  //   age: '',
  //   gender: '',
  // });

  const clickedButton = () => {
    setTimesClicked(timesClicked + 1);
  };

  const handleNameChange = (event) => {
    setMyName(event.target.value);
  };

  // const onFormChange = (event) => {
  //   const name = event.target.name;
  //   setFormData({
  //     ...formData,
  //     [name]: event.target.value,
  //   });
  // };

  /**
   * <Grid item xs={12}>
        <TextField
          id='name'
          name='name'
          placeholder='Enter Name'
          value={formData.name}
          onChange={onFormChange}
        />
        <TextField
          id='age'
          name='age'
          placeholder='Enter Age'
          value={formData.age}
          onChange={onFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Name: {formData.name}</Typography>
        <Typography>Age: {formData.age}</Typography>
      </Grid>
   */

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs={8}>
        kjfhskdjfhkjsdhfkjsdhfkjsdhfkjdshkfjdshkfjhsdkfhsdkfhkdsjfhksdjhfksdjhfksdjf
        jslkdjlskjflksdjflksdjflkjsdlfkjsdlfkjsldkjflsdkjflsdjkflsjdlfkjsdlfksdlfkjsldkfjlskdjflsdkjfldskj
        jslkdjlskjflksdjflksdjflkjsdlfkjsdlfkjsldkjflsdkjflsdjkflsjdlfkjsdlfksdlfkjsldkfjlskdjflsdkjfldskj
        jslkdjlskjflksdjflksdjflkjsdlfkjsdlfkjsldkjflsdkjflsdjkflsjdlfkjsdlfksdlfkjsldkfjlskdjflsdkjfldskj
      </Grid>
      <Grid item xs={4}>
        <Button onClick={clickedButton}>Click me</Button>
      </Grid>
      <Grid item xs={12}>
        <p>The button was {timesClicked}</p>
      </Grid>
      <Divider />
    </Grid>
  );
};

export default Home;
