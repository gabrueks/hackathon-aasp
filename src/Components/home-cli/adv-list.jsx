import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';

const img = 'https://st2.depositphotos.com/1007566/11547/v/950/depositphotos_115475494-stock-illustration-young-male-profile-avatar-isolated.jpg';

const styles = theme => ({
  root: {
    width: '10%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'scroll',
    position: 'relative',
  },
  table: {
    minWidth: 700,
  },
});

let id = 1;
function createData(name, timeSpent, successIndex, contact) {
  id += 1;
  return { id, name, timeSpent, successIndex, contact };
}

const rows = [
  createData('Erick Silva', '500H', '98%', <Link to={{pathname:`/client/${id}`}}><PermContactCalendar/></Link>),
  createData('Gabriel Adoneu', '442H', '96%', <Link to={{pathname:`/client/${id}`}}><PermContactCalendar/></Link>),
  createData('Lucas Navarro', '226H', '90%', <Link to={{pathname:`/client/${id}`}}><PermContactCalendar/></Link>),
  createData('Alvaro Barros', '213H', '89%', <Link to={{pathname:`/client/${id}`}}><PermContactCalendar/></Link>),
  createData('Felipe Dias', '140H', '87%', <Link to={{pathname:`/client/${id}`}}><PermContactCalendar/></Link>),
];

function AdvList(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Advogados</TableCell>
            <TableCell numeric>Horas trabalhadas</TableCell>
            <TableCell numeric>Indice de sucesso</TableCell>
            <TableCell numeric>Contato</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <p><Avatar src={img}/></p>{row.name}
                </TableCell>
                <TableCell numeric>{row.timeSpent}</TableCell>
                <TableCell numeric>{row.successIndex}</TableCell>
                <TableCell numeric>{row.contact}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

AdvList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvList);