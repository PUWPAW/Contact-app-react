import { useContacts } from "../../hooks/useContacts";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContactsTable from "../../components/ContactsTable";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const useStyles = makeStyles((them) => ({
  root: {
    paddingTop: them.spacing(4),
  },
  title: {
    marginBottom: them.spacing(3),
  },
  tableContainer: {
    marginBottom: them.spacing(3),
  },
}));

export const Contacts = () => {
  const contacts = useContacts();
  const classes = useStyles();
  const { data } = contacts;
  const complited = contacts.isLoading ? (
    <Loader />
  ) : (
    <ContactsTable data={data} />
  );

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h3" component="h1">
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.tableContainer}>
          {contacts.isError ? <Error /> : complited}
        </Grid>
      </Grid>
    </Container>
  );
};
