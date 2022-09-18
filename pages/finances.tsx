import {
  AppBar,
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Form } from '@unform/web';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Logo from '../assets/images/logo.png';
import ImageAvatars from '../components/avatar';
import { api } from '../services/axios';
interface FormData {
  tipo: string;
  valor: number;
  entradaSaida: string;
}
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
    margin: {
      margin: theme.spacing(1),
      verticalAlign: 'middle'
    },
    headerValue: {
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
  const [valores, setValores] = useState([]);
  const classes = useStyles();
  const buscadorDados = async () => {
    const response = await api.get('/users');
    setDados(response.data.nome);
    return response;
  };
  useEffect(() => {
    buscadorDados();
  }, []);

  const formRef = useRef(null);
  async function handleSubmit(data: FormData) {
    formRef.current.setErrors({});
    console.log(data);
    const response = await api.post('/values', data);
    console.log(response);
  }
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
            className={classes.headerValue}
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

          <ImageAvatars nome={'loko'}></ImageAvatars>
          <Grid>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <TextField
                name="tipo"
                className={classes.margin}
                variant="outlined"
                size="small"
                label="fixa ou variable"
              />
              <TextField
                name="valor"
                className={classes.margin}
                variant="outlined"
                size="small"
                label="valor"
              />
              <TextField
                name="entradaSaida"
                className={classes.margin}
                variant="outlined"
                size="small"
                label="entrada ou saida"
              />
              {/* <TextField
                name="data"
                className={classes.margin}
                variant="outlined"
                size="small"
                label="data"
              /> */}

              <Button
                size="small"
                variant="contained"
                className={classes.margin}
                type="submit"
              >
                Registrar
              </Button>
            </Form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Finances;
