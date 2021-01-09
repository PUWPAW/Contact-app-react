import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const Loader = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Typography variant="h3" component="h2">
        ...Loading
      </Typography>
    </Grid>
  );
};

export default Loader;
