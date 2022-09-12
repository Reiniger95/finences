import {
  AppBar,
  Box,
  Button,
  Card,
  Grid,
  Toolbar,
  Typography
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '../assets/images/logo.png';
import { api } from '../services/axios';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      background: '#f5f5f5'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    headersaldo: {
      textAlign: 'center',
      backgroundColor: '#dedede',
      borderRadius: 2,
      height: 100
    },
    media: {
      height: 140
    }
  })
);

const Finances: React.FC = () => {
  const [dados, setDados] = useState<number>();
  const classes = useStyles();
  const buscadorDados = async () => {
    const response = await api.get('/users');
    setDados(response.data.nome);
    return response;
  };
  useEffect(() => {
    buscadorDados();
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Grid container direction="row" alignItems="flex-start">
          <Grid item xs={12} className={classes.paper}>
            {' '}
            <Image src={Logo} alt="Logo" />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            className={classes.headersaldo}
          >
            <Grid item xs>
              <Typography variant="h4" component="h2">
                Seu saldo:
                {dados}
              </Typography>
            </Grid>
            <Grid item xs>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item style={{ marginRight: 20 }}>
                  {' '}
                  <Avatar />
                </Grid>
                <Grid item>
                  <Typography variant="h5" component="h2">
                    Seu nome.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Finances;
