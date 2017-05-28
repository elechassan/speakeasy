import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }

  }

logIn(e) {
  e.preventDefault();
  fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
    body: JSON.stringify({
      username: e.target.username.value,
      password: e.target.password.value,
    }),
  })
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    console.log(json);
  })
}




  render() {
    return (
      <div className="login">
        <form onSubmit={(e) => this.logIn(e)}>
          <input type='text' name='username' placeholder='login'/>
          <input type='text' name='password' placeholder='password'/>
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default Login;
