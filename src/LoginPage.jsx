import React from 'react'

function LoginPage() {
  return (
    <div>
      <form align="center">
        <label htmlFor="uname">Username : </label>
        <input type="text" data-testid='username' placeholder='Enter User name'/><br />
        <label id="Pswdlabel" htmlFor="pswd">Password : </label>
        <input type="password" data-testid='password' placeholder='Enter password'/><br />
        <button type="submit" data-testid="login-submit">Login</button> <input type="checkbox" name='check-box' data-testid="checked" id="rememberName" /> <label htmlFor="check-box">Remember Me</label>
      </form>
    </div>
  )
}

export default LoginPage
