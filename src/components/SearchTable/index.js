import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function SearchTable(props) {
  const { totalResponse } = props;

  const classes = useStyles();

  if (!totalResponse) {
    return 'Empty Results. Please try another query';
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Repository Name</StyledTableCell>
            <StyledTableCell align="right">Programming Language</StyledTableCell>
            <StyledTableCell align="right">Owner</StyledTableCell>
            <StyledTableCell align="right">Avatar</StyledTableCell>
            <StyledTableCell align="right">Stars</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody key={totalResponse && totalResponse.length}>
          {totalResponse.map((row, i) => (
            <StyledTableRow key={`key-${row.name}-${i}`}>
              <StyledTableCell key={row.name} component="th" scope="row">
                <Link href={row.svn_url} target="_blank">
                  {row.name}
                </Link>
              </StyledTableCell>
              <StyledTableCell key={`${row.language}+${i}`} align="right">
                <Chip color="primary" label={row.language} variant="outlined" />
              </StyledTableCell>
              <StyledTableCell key={row.owner.name} align="right">
                {row.owner.name}
              </StyledTableCell>
              <StyledTableCell key={row.owner.avatar_url} align="right">
                {' '}
                <Avatar alt={row.owner.name} src={row.owner.avatar_url} />
              </StyledTableCell>
              <StyledTableCell key={row.stargazers_count} align="right">
                {row.stargazers_count}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
