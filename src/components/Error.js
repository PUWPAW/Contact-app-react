import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const Error = () => {
  return (
    <Grid container justify="center" alignItems="center">
      <Typography variant="h3" component="h2">
        Something went wrong...
      </Typography>
    </Grid>
  );
};

export default Error;
