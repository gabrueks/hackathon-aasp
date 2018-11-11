import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import red from '@material-ui/core/colors/red';
import { TextField } from '@material-ui/core';
import {withRouter, Link} from 'react-router-dom';
import { Button } from '@material-ui/core';

const cardStyle = {
    width: '50%',
    margin: 'auto'
}

const styles = theme => ({
  card: {
    // maxWidth: 1000,
    // maxHeight: 700
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class AdvSignup extends React.Component {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card style={cardStyle} className={classes.card}>
        <CardHeader
          title="Cadastro de pessoas"
        />
        <CardContent>
          <TextField label="Nome"          
          fullWidth
          InputLabelProperties={{shrink: true}}
          style={{ margin: 8 }}></TextField>
          <TextField label="Email"          
          fullWidth
          InputLabelProperties={{shrink: true}}
          style={{ margin: 8 }}></TextField>
          <TextField label="CPF"          
          fullWidth
          InputLabelProperties={{shrink: true}}
          style={{ margin: 8 }}></TextField>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Link to="/me" style={{textDecoration: 'none'}}><Button variant="contained" color="secondary">Cancelar</Button></Link>
          <Link to="/" style={{textDecoration: 'none', margin: 'auto'}}><Button variant="contained" color="primary" style={{marginLeft:'auto'}}>Confirmar</Button></Link>
        </CardActions>
      </Card>
    );
  }
}

AdvSignup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AdvSignup));