/*import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from './history';

/*function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}*/
/*
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"  onClick={()=>history.push('/Login')}
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <p className="forget-password" align='right' >
              <Link href="/Login" variant="body2">Already have an account? Sign in</Link>
          </p>
        </form>
      </div>
   
    </Container>
  );
}
*/

import React from "react";


export class Register extends React.Component {

  constructor(props) {
    super(props);
      
    this.state={
      
      email:'',
      phoneNumber:'',
      pswd : '',
      name : '',
      cpswd : '',

    }
    this.handleNameChange=this.handleNameChange.bind(this)
    this.handleEmailChange=this.handleEmailChange.bind(this)
    this.handlePhoneNumberChange=this.handlePhoneNumberChange.bind(this)
    this.handlePasswordChange=this.handlePasswordChange.bind(this)
    this.handleConfirmPasswordChange=this.handleConfirmPasswordChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  
  }
  
  handleNameChange=event=>{
    this.setState({
      name : event.target.value
    });
  }
  handleEmailChange=event=>{
    this.setState({
      email : event.target.value
    });
  }
  handlePhoneNumberChange=event=>{
    this.setState({
      phoneNumber : event.target.value
    });
  }

  handlePasswordChange=event=>{
    this.setState({
      pswd : event.target.value
    });
  }
  handleConfirmPasswordChange=event=>{
    this.setState({
      cpswd : event.target.value
    });
  }


  handleSubmit(event) {
    
    event.preventDefault();
    console.log(this.state)
     var body = {
      pswd : this.state.pswd,
      name : this.state.name,
      phoneNumber: this.state.phoneNumber,
      email : this.state.email,
    }
    console.log(body);
    if(this.state.name==""){
      alert('Please enter the name')

    }
  else if(this.state.email==""){
    alert('Please enter the email')
}
else if(this.state.phoneNumber==""){
  alert('Please enter the phone number')
}
else if(this.state.pswd==""){
  alert('Please enter the password')
}
  else if(this.state.cpswd!=this.state.pswd){
      alert('confirm password does not matched')
    
      }
    else{
    

  const url = "http://localhost:9000/person";
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
    .then(response => response.json())
    .then(contents => {console.log(contents);
                      
 })
 .catch(()=> console.log("can't access " + url + " response. "))


 alert('Details are submitted successful');
   //this.fun.bind(this);*/
   this.props.history.push("/login");
 
  }
}



  
  
  
  render() {
    return (
    <div className="register">
        <form onSubmit={this.displayLogin}>
          <h2>Register</h2>

          <div className="name">
            <input
              type="text"
              placeholder="User Name"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange} required
            />
          </div>
          <div className="email">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleEmailChange} required
            />
          </div>
          <div className="phoneNumber">
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handlePhoneNumberChange} required
            />
          </div>


          <div className="pasword">
            <input
              type="password"
              placeholder="Password"
              name="pswd"
              value={this.state.pswd}
              onChange={this.handlePasswordChange} required
            />
          </div>
          <div className="confirm pasword">
            <input
              type="password"
              placeholder="Confirm Password"
              name="cpswd"
              value={this.state.cpswd}
              onChange={this.handleConfirmPasswordChange} required
            />
          </div>


    

          <input type="submit" value="Register" onClick={this.handleSubmit}/>
        </form>

        <a href ="/login">Login here</a>
      </div>
      
    );
  }
}


export default Register;

