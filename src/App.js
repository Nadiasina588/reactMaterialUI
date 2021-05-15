// import React from 'react'
// import { Admin, Resource } from 'react-admin'
// import restProvider from 'ra-data-simple-rest'
// import PostList from './components/PostList'
// import PostCreate from './components/PostCreate'
// import PostEdit from './components/PostEdit'
// import UserList from './components/UserList'
// import UserCreate from './components/UserCreate'
// import UserEdit from './components/UserEdit'

// function App() {
//   return (
//     <Admin dataProvider={restProvider('http://localhost:3000')}>
//       <Resource 
//       name="posts" 
//       list={PostList} 
//       create={PostCreate} 
//       edit={PostEdit}
//       />
//       <Resource 
//       name="users" 
//       list={UserList} 
//       create={UserCreate} 
//       edit={UserEdit} 
//       />
//     </Admin>
//   )
// }
// export default App

import React from 'react';
import logo from './logo.svg';
import { 
  Typography,
   AppBar,
    Card, 
    CardActions,
     CardContent, 
     CardMedia,
     CssBaseline,
     Grid,
     Toolbar, 
     Container,
     Button
    } from '@material-ui/core';
    import {PhotoCamera} from '@material-ui/icons';
    import useStyles from './styles';

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const App = () => {

  const classes = useStyles();

  return (
    <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <PhotoCamera className={classes.icon } />
        <Typography variant="h6">Portfolio Nadiasina</Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
            My Name is Nadiasina Nico Maradonance
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            My Name is Nadiasina Nico Maradonance Developer Full Stack JS I am student at ENI Scholl , 
            Freelance developer and Designer
          </Typography>
          <div className={classes.button}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                   See my Porfolio
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">Secondary action</Button>
              </Grid>
            </Grid>
          </div>

        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(() => (
            <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.CardMedia}
              image="https://source.unsplash.com/random"
                title="Image title" />
                <CardContent  className={ classes.CardContent }>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
            </Card>
          </Grid>

          ))}
          

        </Grid>
      </Container>
    </main>
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterButtom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary">
      Something here to give the footer a purpose!
      </Typography>
    </footer>

    </>
  )
}
export default App;