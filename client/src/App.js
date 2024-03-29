import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Student from './components/showStudent/ShowStudent';
import CreateStudent from './components/createStudent/CreateStudent';
import './App.css';
import useStyles from './styles.js';

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' colors='inherit'>
          <Typography className={classes.heading} variant='h4' align='center'>
            STUDENTS MERN CRUD
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems='stretch'>
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position='static'   >
                  <Student />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar className={classes.appBar} position='static'  >
                  <CreateStudent />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
