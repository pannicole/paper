import React from 'react'
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem",
    textAlign: "center",
  },
  titleBox: {
    width: "400px",
  }
}));

const Navbar = () => {
  const styles = useStyles();
  return (
    <Grid className = {styles.titleBox}>
    <h1 className = {styles.title}>Scribblez</h1>
    <hr />
  </Grid>
  )
}

export default Navbar
