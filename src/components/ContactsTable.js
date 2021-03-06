import React from "react";
import { format, parseISO } from "date-fns";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import { NATIONALITY_HUMAN_NAME } from "../constants/nationality";
import CopyToClipboard from "./CopyToClipboard";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  location: {
    maxWidth: 180,
  },
});

const ContactsTable = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="contacts table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="left">Fullname</TableCell>
            <TableCell align="left">Birthday</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="right">Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((contact) => (
            <TableRow key={contact.login.uuid}>
              <TableCell>
                <Avatar alt="Avatar" src={contact.picture.thumbnail} />
              </TableCell>
              <TableCell align="left">
                <Typography variant="body2">
                  {contact.name.title} {contact.name.first} {contact.name.last}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body2">
                  {format(
                    parseISO(contact.dob.date),
                    "cccc, M/dd/yy, h:mm:ss a"
                  )}
                </Typography>
                <Typography variant="body2">{contact.dob.age} years</Typography>
              </TableCell>
              <TableCell align="left">
                <CopyToClipboard text={contact.email} />
              </TableCell>
              <TableCell align="left">
                <CopyToClipboard text={contact.phone} />
              </TableCell>
              <TableCell align="left" className={classes.location}>
                <Typography variant="body2">
                  /{contact.location.country}/
                </Typography>
                <Typography variant="body2">
                  {contact.location.postcode} {contact.location.city},{" "}
                  {contact.location.state}, {contact.location.street.number}{" "}
                  {contact.location.street.name}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2">
                  {NATIONALITY_HUMAN_NAME[contact.nat]}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactsTable;
