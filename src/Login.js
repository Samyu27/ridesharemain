/*import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import history from './history';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"  onClick={()=>history.push('/Home')}
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
*/



import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export class Login extends React.Component {

  constructor(props) {
    super(props);
      
    this.state={
      
      pswd : '',
      name : '',

    }
    this.handleNameChange=this.handleNameChange.bind(this)
  this.handlePasswordChange=this.handlePasswordChange.bind(this)
  this.handleSubmit=this.handleSubmit.bind(this)
  
  }
  
  handleNameChange=event=>{
    this.setState({
      name : event.target.value
    });
  }

  handlePasswordChange=event=>{
    this.setState({
      pswd : event.target.value
    });
  }

  handleSubmit=event=>{
    event.preventDefault();
    //console.log(this.state)
     var body = {
      pswd : this.state.pswd,
      name : this.state.name,
    }
    //console.log(body);
    if(this.state.name==""){
      alert('Please enter the name')

    }
    else if(this.state.pswd==""){
      alert('Please enter the password')
  }
    else{
    const url = "http://localhost:9000/personVal";
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('POST','GET');
 
    fetch(url, {
       headers:headers,
       method: 'POST',
       body: JSON.stringify(body)
    })
    .then(response => {if(response.redirected){
      this.props.history.push("/Home");
      
      //window.location.href="/main";
    }
    else if(response.ok){
    alert("Invalid Credentials")
    }
 })
  }
}

  render() {
    return (
      <div className="login">
        <form onSubmit={this.displayLogin}>
          <h2>Login</h2>
          <div className="username">
            <input
              type="text"
              placeholder="Username..."
              value={this.state.name}
              onChange={this.handleNameChange}
              name="name"
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Password..."
              value={this.state.pswd}
              onChange={this.handlePasswordChange}
              name="pswd"
            />
          </div>

          <input type="submit" value="Login" onClick={this.handleSubmit}/>
        </form>

        <a href ="/">Create an account</a>
      </div>

    );
  }
}

export default Login;

